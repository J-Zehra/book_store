import { Open_Sans, Amatic_SC, Dancing_Script } from "next/font/google";

export const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
});

export const amatic_sc = Amatic_SC({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
  preload: true,
});

export const dancing_script = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});
