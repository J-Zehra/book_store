import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    const bookSales = await prisma.bookSale.findMany({
      where: {
        book: { authorId: id },
      },
      include: { book: true },
    });

    const totalEarnings = bookSales.reduce(
      (sum, sale) => sum + sale.book.price * sale.unitSold,
      0
    );

    console.log(bookSales);
    console.log(totalEarnings);
    return NextResponse.json({ totalEarnings });
  } catch (error) {
    return new NextResponse("Fetch Error", { status: 404 });
  }
}
