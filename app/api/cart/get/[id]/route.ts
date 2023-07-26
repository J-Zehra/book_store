import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const userId = params.id;
  console.log(userId);

  try {
    const cartItem = await prisma.cart.findUnique({
      where: { userId },
      include: {
        items: {
          include: {
            book: { include: { author: { include: { profile: true } } } },
          },
        },
      },
    });
    console.log(cartItem);
    return NextResponse.json(cartItem);
  } catch (error) {
    return new NextResponse("Fetch Error", { status: 404 });
  }
}
