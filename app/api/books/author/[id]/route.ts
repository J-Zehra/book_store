import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  console.log(id);
  try {
    const books = await prisma.book.findMany({
      where: {
        authorId: id,
      },
      include: {
        author: {
          select: {
            avatar: true,
            profile: { select: { bio: true, penName: true } },
          },
        },
        bookSale: true,
        rating: true,
      },
    });
    return NextResponse.json(books);
  } catch (error) {
    return new NextResponse("Fetch Error");
  }
}
