import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    const totalBooksSold = await prisma.bookSale.aggregate({
      where: {
        book: { authorId: id },
      },
      _sum: { unitSold: true },
    });

    console.log(totalBooksSold);
    return NextResponse.json({ totalBooksSold: totalBooksSold._sum.unitSold });
  } catch (error) {
    return new NextResponse("Fetch Error", { status: 404 });
  }
}
