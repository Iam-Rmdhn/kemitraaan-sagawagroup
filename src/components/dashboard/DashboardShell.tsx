"use client";

import type * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  BadgeCheck,
  Banknote,
  BarChart3,
  FileText,
  LayoutDashboard,
  Package,
  Store,
  Users,
} from "lucide-react";
import { SignOutButton } from "@/components/dashboard/SignOutButton";
import { DashboardUserMenu } from "@/components/dashboard/DashboardUserMenu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

const adminLinks = [
  { href: "/dashboard/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/admin/pendaftaran", label: "Pendaftaran", icon: FileText },
  { href: "/dashboard/admin/mitra", label: "Mitra", icon: Users },
  { href: "/dashboard/admin/pic-sales", label: "PIC Sales", icon: BadgeCheck },
  { href: "/dashboard/admin/outlet", label: "Outlet", icon: Store },
  { href: "/dashboard/admin/paket", label: "Paket", icon: Package },
  { href: "/dashboard/admin/produk", label: "Produk", icon: Package },
  { href: "/dashboard/admin/pembayaran", label: "Pembayaran", icon: Banknote },
  { href: "/dashboard/admin/sheet-sync", label: "Sheet Sync", icon: BarChart3 },
];

const mitraLinks = [
  { href: "/dashboard/mitra", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/mitra/omset", label: "Omset", icon: BarChart3 },
  { href: "/dashboard/mitra/pembayaran", label: "Pembayaran", icon: Banknote },
  { href: "/dashboard/mitra/dokumen", label: "Dokumen", icon: FileText },
  { href: "/dashboard/mitra/profil", label: "Profil", icon: Users },
];

export function DashboardShell({
  children,
  role,
  userName,
}: {
  children: React.ReactNode;
  role: "admin" | "mitra";
  userName: string;
}) {
  const pathname = usePathname();
  const links = role === "admin" ? adminLinks : mitraLinks;
  const title = role === "admin" ? "Admin Panel" : "Dashboard Mitra";
  const description =
    role === "admin"
      ? "Kelola pendaftaran, mitra, pembayaran, dan outlet."
      : "Pantau kemitraan, pembayaran, dokumen, dan omset outlet.";

  return (
    <SidebarProvider
      style={
        {
          "--header-height": "4rem",
        } as React.CSSProperties
      }
    >
      <Sidebar collapsible="offcanvas">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="data-[slot=sidebar-menu-button]:p-1.5!"
                tooltip="Sagawa Partnership"
              >
                <Link href={role === "admin" ? "/dashboard/admin" : "/dashboard/mitra"}>
                  <span className="flex size-7 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                    <Image
                      src="/assets/logos/sagawa.png"
                      alt="Sagawa"
                      width={24}
                      height={24}
                      className="h-auto w-auto"
                    />
                  </span>
                  <span className="text-base font-semibold">Sagawa Partnership</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-2">
              <SidebarMenu>
                <SidebarMenuItem className="flex items-center gap-2">
                  <SidebarMenuButton
                    tooltip={role === "admin" ? "Validasi pendaftaran" : "Daftar kemitraan"}
                    className="min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
                    asChild
                  >
                    <Link href={role === "admin" ? "/dashboard/admin/pendaftaran" : "/daftar-kemitraan"}>
                      <FileText />
                      <span>{role === "admin" ? "Review Pendaftaran" : "Daftar Kemitraan"}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>{title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {links.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== `/dashboard/${role}` && pathname.startsWith(link.href));

                  return (
                    <SidebarMenuItem key={link.href}>
                      <SidebarMenuButton asChild isActive={isActive} tooltip={link.label}>
                        <Link href={link.href}>
                          <link.icon />
                          <span>{link.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup className="mt-auto">
            <SidebarGroupLabel>Operasional</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Bantuan">
                    <BadgeCheck />
                    <span>Bantuan</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Pengaturan">
                    <LayoutDashboard />
                    <span>Pengaturan</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <DashboardUserMenu userName={userName} role={role} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
          <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
            <div>
              <h1 className="text-base font-medium">{title}</h1>
              <p className="hidden text-xs text-muted-foreground sm:block">{description}</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <SignOutButton />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">{children}</div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
