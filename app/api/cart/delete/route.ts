import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Check the request method
  if (request.method !== "POST") {
    return new NextResponse("Method Not Allowed", { status: 405 });
  }

  const body = await request.json();
  const { id } = body;

  const deleteCartItem = await prisma.cartItem.delete({
    where: { id },
  });
  console.log(deleteCartItem);
}
