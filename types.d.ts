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
  isbn: string;
  publisher: string;
  genres: string[] | null;
  description: string;
  pageCount: number;
};
