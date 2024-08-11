import { MongoClient, GridFSBucket } from "mongodb";
import { Readable } from "stream";

import { notFound } from "next/navigation";
import { NextApiResponse } from "next";

// Initialize MongoDB client and GridFS bucket
const client = new MongoClient(process.env.NEXT_PUBLIC_DATABASE_URL as string);
const db = client.db(process.env.NEXT_PUBLIC_DATABASE_NAME);
const bucket = new GridFSBucket(db);

export async function saveImageToGridFS(
  file: File,
  blogId: string
): Promise<string> {
  const filename = `${file.name}`;
  const uploadStream = bucket.openUploadStream(filename);

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const readableFileStream = Readable.from(buffer);

  return new Promise<string>((resolve, reject) => {
    readableFileStream
      .pipe(uploadStream)
      .on("error", reject)
      .on("finish", () => resolve(filename));
  });
}

export async function getImageFromGridFS(
  filename: string,
  res: NextApiResponse
) {
  const downloadStream = bucket.openDownloadStreamByName(filename);

  return new Promise<void>((resolve, reject) => {
    downloadStream
      .on("error", (err) => {
        console.error(err);
        res.status(500).send("Error retrieving the image");
        reject(err);
      })
      .on("data", (chunk) => {
        res.write(chunk);
      })
      .on("end", () => {
        res.end();
        resolve();
      });
  });
}
