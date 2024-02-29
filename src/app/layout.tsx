import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Topbar from "@/components/topbar";
import "./root.layout.css";

export const metadata: Metadata = {
  title: "TKCS Portal",
  description:
    "Discover the Dynamic World of AI and ML: Explore Technokart Consultancy Services' Robust Capabilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="main">
        <Topbar />
        {children}
      </body>
    </html>
  );
}
