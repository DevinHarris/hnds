import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import "@/components/Nav/Nav.module.scss"
import "@/app/globals.scss";



const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "HANDS: Empowering Everyone to Sell What Matters.",
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
        className={`${openSans.variable}  antialiased`}
      >
        <Nav />
        <div className="app-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
