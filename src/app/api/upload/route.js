import { PrismaClient } from "@prisma/client";
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const packageType = formData.get("packageType");

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Convert File → Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Check trong DB có packageType chưa
    const existingImage = await prisma.image.findFirst({
      where: { packageType },
    });

    // Upload lên Cloudinary
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream({ folder: "lapmangfpt" }, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      });
      stream.end(buffer);
    });

    let image;

    if (existingImage) {
      if (existingImage.publicId) {
        await cloudinary.uploader.destroy(existingImage.publicId);
      }

      image = await prisma.image.update({
        where: { id: existingImage.id },
        data: {
          url: result.secure_url,
          publicId: result.public_id,
        },
      });
    } else {
      image = await prisma.image.create({
        data: {
          url: result.secure_url,
          publicId: result.public_id,
          packageType,
        },
      });
    }

    return NextResponse.json(image);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
