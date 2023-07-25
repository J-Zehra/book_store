import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId") as string;

  try {
    const cartItem = await prisma.cart.findUnique({
      where: { userId },
      include: {
        items: {
          select: {
            book: {
              select: {
                cover: true,
                price: true,
                title: true,
                author: { select: { profile: { select: { penName: true } } } },
              },
            },
            quantity: true,
            bookId: true,
            id: true,
          },
        },
      },
    });
    return NextResponse.json(cartItem);
  } catch (error) {
    return new NextResponse("Fetch Error", { status: 404 });
  }
}
