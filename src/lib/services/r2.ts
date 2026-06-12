import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export type UploadedFileMeta = {
  key: string;
  fileName: string;
  mimeType: string;
  size: number;
};

function getR2Client() {
  const accountId = process.env.R2_ACCOUNT_ID;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

  if (!accountId || !accessKeyId || !secretAccessKey) {
    return null;
  }

  return new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
}

export async function uploadFileToR2(file: File, folder: string): Promise<UploadedFileMeta> {
  const bytes = Buffer.from(await file.arrayBuffer());
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  const key = `${folder}/${crypto.randomUUID()}-${safeName}`;
  const client = getR2Client();
  const bucket = process.env.R2_BUCKET;

  if (client && bucket) {
    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: bytes,
        ContentType: file.type || "application/octet-stream",
      })
    );
  }

  return {
    key,
    fileName: file.name,
    mimeType: file.type || "application/octet-stream",
    size: file.size,
  };
}

export function getPublicFileUrl(key: string) {
  const base = process.env.R2_PUBLIC_BASE_URL;
  if (!base) return null;

  return `${base.replace(/\/$/, "")}/${key}`;
}
