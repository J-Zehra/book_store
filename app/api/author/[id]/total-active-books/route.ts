import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    const totalActiveBooks = await prisma.book.aggregate({
      _count: { id: true },
      where: {
        authorId: id,
      },
    });

    console.log(totalActiveBooks);
    return NextResponse.json({ totalActiveBooks: totalActiveBooks._count.id });
  } catch (error) {
    return new NextResponse("Fetch Error", { status: 404 });
  }
}
