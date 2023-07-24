import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { NewUser } from "@/types";

export async function POST(request: Request) {
  // Check the request method
  if (request.method !== "POST") {
    return new NextResponse("Method Not Allowed", { status: 405 });
  }

  const body = await request.json();
  const newUserData: NewUser = body;

  // Destructure email and password directly from the body
  const { username, penName, email, password, role } = newUserData;

  // CHECK IF THE INPUT IS NOT EMPTY
  if (!email || !password || !username) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  // CHECK IF THE USER EXISTS
  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (exist) {
    return new NextResponse("Email already exists", { status: 409 });
  }

  // HASH THE USER PASSWORD
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(email, password);
  const user = await prisma.user.create({
    data: {
      username,
      email,
      role,
      password: hashedPassword,
      profile: {
        create: {
          penName,
        },
      },
    },
  });

  console.log(user);

  return NextResponse.json(user);
}
