import { Role } from "./utils/enum";

type ChildrenProp = {
  children: React.ReactNode;
};

type SessionUserData = {
  name: string;
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
  genres: string[] | undefined;
  description: string;
  pageCount: number;
  language: string;
  totalStocks: number;
  cover: string;
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
  cover: string;
  price: number;
  publisher: string;
  genres: string[] | null;
  description: string;
  pageCount: number;
  language: string;
  stocks: number;
  bookSale: [];
  createdAt: string;
  updatedAt: string;
};

type FetchedCart = {
  book: {
    cover: string;
    price: number;
    title: string;
    authorId?: string;
    author: { profile: { penName: string } };
  };
  bookId: string;
  id?: string;
  quantity: number;
};

type OrderDetails = {
  email: string;
  items: [{ title: string; price: number; quantity: number; bookId: string }];
  total: number;
  address: string;
};

type BookFullDetails = {
  id: string;
  language: string;
  pageCount: number;
  price: number;
  publisher: string;
  stocks: number;
  title: string;
  createdAt: string;
  cover: string;
  description: string;
  authorId: string;
  author: { avatar: string; profile: { penName: string; bio: string } };
  bookSale: [];
  genres: string[];
  rating: [];
};

type BookRating = {
  id: string;
  rating: number;
};

type Author = {
  avatar: string?;
  id: string;
  books: [{ genres: [] }];
  profile: { penName: string };
};
