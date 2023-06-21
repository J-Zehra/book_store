type ChildrenProp = {
  children: React.ReactNode;
};

type AppContextValues = {
  activeNav: string;
  setActiveNav: Dispatch<SetStateAction<string>>;
};