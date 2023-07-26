import prisma from "@/lib/prismadb";
import { Error } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const books = await prisma.book.findMany({
      orderBy: { createdAt: "asc" },
      skip: 1,
      take: 6,
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
    return NextResponse.json(books);
  } catch (error) {
    return new NextResponse("Fetch book error");
  }
}
