import type { Metadata } from "next";
import "./style/index.scss";
import Header from "@/Components/Header/Header";
import Head from "next/head";
export const metadata: Metadata = {
  title: "HEM PORTFOLIO",
  description: "Welcome to Hem Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
