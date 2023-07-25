import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") as string;

  const deleteCartItem = await prisma.cartItem.delete({
    where: { id },
  });
  console.log(deleteCartItem);
  return NextResponse.json(deleteCartItem);
}
