import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.scss";


const sourceSansPro = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSansPro.variable}  antialiased`}
      >
        <Nav />
        <div className="app-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
