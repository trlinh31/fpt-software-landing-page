import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const packageType = searchParams.get("packageType");

  const image = await prisma.image.findFirst({
    where: packageType ? { packageType } : {},
    select: {
      id: true,
      url: true,
      packageType: true,
    },
  });

  return NextResponse.json(image);
}
