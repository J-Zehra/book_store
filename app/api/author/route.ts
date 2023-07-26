import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const authors = await prisma.user.findMany({
      where: {
        role: "AUTHOR",
      },
      include: { books: true, profile: true },
    });

    console.log(authors);
    return NextResponse.json(authors);
  } catch (error) {
    return new NextResponse("Fetch Error", { status: 404 });
  }
}
