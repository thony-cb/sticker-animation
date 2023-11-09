import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sticker Animation",
  description: "GSAP Animation created by Diego Cabrera",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-apple bg-[#111]">{children}</body>
    </html>
  );
}
