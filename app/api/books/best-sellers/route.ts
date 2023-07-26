import prisma from "@/lib/prismadb";
import { Error } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const books = await prisma.bookSale.findMany({
      take: 10, // Specify the number of best sellers you want to retrieve
      orderBy: {
        unitSold: "desc", // Order the results in descending order of units sold
      },
      include: {
        book: true, // Include the associated Book information for each BookSale entry
      },
    });
    return NextResponse.json(books);
  } catch (error) {
    return new NextResponse("Fetch book error");
  }
}
