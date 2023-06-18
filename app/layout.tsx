import AppContext from "@/context/appContext";
import Navbar from "../components/navbar";
import ThemeWrapper from "../components/themeWrapper";
import { open_sans } from "@/utils/font";

export const metadata = {
  title: "Mema Book Store",
  description: "E-commerce book store. Find your book.",
  icons: {
    icon: {
      url: "/books.png",
      type: "image/png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: "0" }} className={open_sans.className}>
        <ThemeWrapper>
          <AppContext>
            <Navbar />
            {children}
          </AppContext>
        </ThemeWrapper>
      </body>
    </html>
  );
}
