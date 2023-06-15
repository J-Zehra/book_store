import Navbar from "./components/navbar";
import ThemeWrapper from "./components/themeWrapper";

export const metadata = {
  title: "Mema Book Store",
  description: "E-commerce book store. Find your book.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: "0" }}>
        <ThemeWrapper>
          <Navbar />
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
