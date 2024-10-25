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
  title: "Protagonist Syndrome",
  openGraph: {
    title: 'Protagonist Syndrome',
    url: 'protagonistsyndrome.com',
    images: [
      {
        url: 'https://d2oi1rqwb0pj00.cloudfront.net/product/nio_1722083668348_100.webp',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
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
        <Footer />
      </body>
    </html>
  );
}
