import prisma from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { BookData, SessionUserData } from "@/types";

export async function POST(request: Request) {
  // Check the request method
  if (request.method !== "POST") {
    return new NextResponse("Method Not Allowed", { status: 405 });
  }

  const body = await request.json();
  const bookData: BookData = body;

  // WRITE VALIDATION
  const {
    description,
    genres,
    price,
    publisher,
    title,
    pageCount,
    language,
    totalStocks,
    cover,
  } = bookData;
  if (!description || !genres || !price || !title || !totalStocks) {
    return;
  }

  // GET CURRENT USER ID
  const session = await getServerSession(authOptions);
  const userData = session?.user as SessionUserData;
  console.log("Session ID: ", userData.id);

  const book = await prisma.book.create({
    data: {
      description,
      price,
      publisher,
      title,
      genres,
      pageCount,
      language,
      cover,
      stocks: totalStocks,
      authorId: userData.id,
    },
  });

  console.log(book);
  return NextResponse.json(book);
}
