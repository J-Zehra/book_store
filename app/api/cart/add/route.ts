import prisma from "@/lib/prismadb";
import { BookCartData } from "@/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Check the request method
  if (request.method !== "POST") {
    return new NextResponse("Method Not Allowed", { status: 405 });
  }

  const body = await request.json();
  const bookCartData: BookCartData = body;

  const { bookId, quantity, userId } = bookCartData;

  const cartExist = await prisma.cart.findUnique({
    where: {
      userId,
    },
  });

  if (cartExist) {
    const cart = await prisma.cartItem.create({
      data: {
        quantity,
        bookId,
        cartId: cartExist.id,
      },
    });
    console.log(cart);
    return NextResponse.json(cart);
  }

  const cart = await prisma.cart.create({
    data: {
      userId,
      items: { create: { quantity, bookId } },
    },
  });
  console.log(cart);
  return NextResponse.json(cart);
}
