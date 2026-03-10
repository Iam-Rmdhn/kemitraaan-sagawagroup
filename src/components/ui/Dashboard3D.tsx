"use client";

import { Canvas } from "@react-three/fiber";
import { useTexture, Float, ContactShadows, RoundedBox } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Screen() {
  const texture = useTexture("/assets/img/mock/sgw-user-dashboard.webp", (tex) => {
    if (tex && !Array.isArray(tex)) {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.needsUpdate = true;
    }
  });
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x = -Math.PI / 2;

    const ctx = gsap.context(() => {
      gsap.to(groupRef.current!.rotation, {
        x: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#dashboard-3d-container",
          start: "top bottom",
          end: "center center",
          scrub: 1,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <RoundedBox args={[4.4, 3.0, 0.1]} radius={0.1} smoothness={4} position={[0, 0, -0.05]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.4} metalness={0.6} />
      </RoundedBox>
      
      <mesh position={[0, 0, 0.005]}>
        <planeGeometry args={[4.2, 2.8]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[4.1, 2.7]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      
      <mesh position={[0, 1.45, 0.01]}>
        <circleGeometry args={[0.03, 32]} />
        <meshBasicMaterial color="#333333" />
      </mesh>
    </group>
  );
}

export function Dashboard3D() {
  return (
    <div id="dashboard-3d-container" className="w-full h-[350px] sm:h-[450px] lg:h-[500px]">
      <Canvas camera={{ position: [0, 0, 4.8], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} intensity={1} />
        <directionalLight position={[-5, 5, 5]} intensity={0.5} />
        
        <Float rotationIntensity={0.05} floatIntensity={0.5} speed={2}>
          <Suspense fallback={null}>
            <Screen />
          </Suspense>
        </Float>
        
        <ContactShadows position={[0, -1.8, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#000000" />
      </Canvas>
    </div>
  );
}