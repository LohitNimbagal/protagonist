import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from '@/components/header'
import Footer from "@/components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Protagonist HQ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(
        "font-sans antialiased",
        fontSans.variable
      )}>
        <Header />
        {children}
      </body>
    </html>
  );
}
