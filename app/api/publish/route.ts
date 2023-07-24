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
  const { description, genres, isbn, publisher, title, pageCount } = bookData;
  if (!description || !genres || !isbn || !title) {
    return;
  }

  // GET CURRENT USER ID
  const session = await getServerSession(authOptions);
  const userData = session?.user as SessionUserData;
  console.log("Session ID: ", userData.id);

  const book = await prisma.book.create({
    data: {
      description,
      isbn,
      publisher,
      title,
      genres,
      pageCount,
      authorId: userData.id,
    },
  });

  console.log(book);
  return NextResponse.json(book);
}
