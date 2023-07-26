import prisma from "@/lib/prismadb";
import { BookData } from "@/types";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const bookData: BookData = body;

  const id = params.id;
  console.log(id);
  try {
    const books = await prisma.book.update({
      where: {
        id,
      },
      data: {
        title: bookData.title,
        price: bookData.price,
        publisher: bookData.publisher,
        genres: bookData.genres,
        description: bookData.description,
        pageCount: bookData.pageCount,
        language: bookData.language,
        stocks: bookData.totalStocks,
        cover: bookData.cover,
      },
    });
    return NextResponse.json(books);
  } catch (error) {
    return new NextResponse("Fetch Error");
  }
}
