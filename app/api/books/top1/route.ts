import prisma from "@/lib/prismadb";
import { Error } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const book = await prisma.book.findMany({
      orderBy: { createdAt: "asc" },
      take: 1,
      include: {
        author: {
          select: {
            profile: {
              select: { penName: true, userId: true },
            },
          },
        },
      },
    });
    return NextResponse.json(book);
  } catch (error) {
    return new NextResponse("Fetch book error");
  }
}
