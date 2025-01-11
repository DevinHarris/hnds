import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.scss";


const sourceSansPro = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "HNDS: Empowering Everyone to Sell What Matters",
  description: "HNDS is the ultimate platform for creators, entrepreneurs, and individuals to sell digital content, physical products, and subscriptions with ease. Customize your storefront, connect directly with your audience, and take control of your sales—all in your own HNDS.",
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
