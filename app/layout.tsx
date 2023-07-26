import Navbar from "../components/navbar/navbar";
import ThemeWrapper from "../components/themeWrapper";
import { open_sans } from "@/utils/font";
import Footer from "@/components/footer";
import AuthContext from "@/context/authContext";
import AppContext from "@/context/appContext";
import Loadables from "@/context/loadables";
import { QueryClientProvider } from "react-query";
import QueryProvider from "@/context/queryProvider";

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
        <AuthContext>
          <AppContext>
            <ThemeWrapper>
              <Loadables>
                <QueryProvider>
                  <Navbar />
                  {children}
                </QueryProvider>
              </Loadables>
              <Footer />
            </ThemeWrapper>
          </AppContext>
        </AuthContext>
      </body>
    </html>
  );
}
