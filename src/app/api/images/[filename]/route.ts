import { MongoClient, GridFSBucket } from "mongodb";
import { NextResponse } from "next/server";

const client = new MongoClient(process.env.NEXT_PUBLIC_DATABASE_URL as string);
const db = client.db(process.env.NEXT_PUBLIC_DATABASE_NAME);
const bucket = new GridFSBucket(db);

export async function GET(
  req: Request,
  { params }: { params: { filename: string } }
) {
  const { filename } = params;

  // Decode the filename if needed (e.g., URL encoding)
  const decodedFilename = decodeURIComponent(filename);

  const downloadStream = bucket.openDownloadStreamByName(decodedFilename);

  // Create a ReadableStream to handle the data
  const stream = new ReadableStream({
    start(controller) {
      downloadStream
        .on("data", (chunk) => controller.enqueue(chunk))
        .on("end", () => controller.close())
        .on("error", (err) => {
          console.error("Error streaming file:", err);
          controller.error(err);
        });
    },
  });

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "image/jpeg", // Adjust MIME type as needed
    },
  });
}
