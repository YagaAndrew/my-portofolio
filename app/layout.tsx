import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/pages/Home/Navbar/ResponsiveNav";

const font = Inter({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Andrew Yaga Novianta - Portfolio",
  description: "Portofolio Website Using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={`${font.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <Provider>
            <ResponsiveNav />
            {children}
          </Provider>
      </body>
    </html>
  );
}
