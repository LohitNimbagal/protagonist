import { Inter as FontSans, Lato, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from '@/components/header'
import Footer from "@/components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: "--poppins",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ['100', '300', '400', '700', '900'],
  variable: "--lato",
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
        "font-sans antialiased poppins",
        fontSans.variable, poppins.variable, lato.variable
      )}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
