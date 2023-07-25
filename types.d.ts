import { Role } from "./utils/enum";

type ChildrenProp = {
  children: React.ReactNode;
};

type SessionUserData = {
  username: string;
  role: Role;
  email: string;
  id: string;
  avatar: string;
};

type NewUser = {
  username: string;
  penName: string;
  email: string;
  password: string;
  role: Role;
};

type BookData = {
  title: string;
  price: number;
  publisher: string;
  genres: string[] | null;
  description: string;
  pageCount: number;
  language: string;
  totalStocks: number;
};

type BookCartData = {
  bookId: string;
  userId: string;
  cartId?: string;
  quantity: number;
};

type FetchedBookData = {
  id: string;
  author: { profile: { penName: string } };
  authorId: string;
  title: string;
  cover: string?;
  price: number;
  publisher: string;
  genres: string[] | null;
  description: string;
  pageCount: number;
  language: string;
  stocks: number;
  createdAt: string;
  updatedAt: string;
};

type FetchedCart = {
  book: {
    cover: string;
    price: number;
    title: string;
    author: { profile: { penName: string } };
  };
  bookId: string;
  id?: string;
  quantity: number;
};
