import prisma from "@/lib/prismadb";
import { Error } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const books = await prisma.book.findMany({
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
