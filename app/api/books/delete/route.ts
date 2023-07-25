import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("bookId") as string;
  console.log(id);
  try {
    const deletedBook = await prisma.book.delete({ where: { id } });
    return NextResponse.json(deletedBook);
  } catch (error) {
    return new NextResponse("Fetch Error");
  }
}
