import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const books = await prisma.book.findMany({
      include: {
        author: {
          select: {
            profile: {
              select: { penName: true },
            },
          },
        },
      },
    });
    return NextResponse.json(books);
  } catch (error) {
    return new NextResponse("Fetch Error");
  }
}
