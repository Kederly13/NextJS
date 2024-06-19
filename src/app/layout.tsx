import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}
        <div>
          <Link href='/portfolio'>Portfolio</Link>
          <Link href='/dashboard/analytics'>Analytics</Link>
          <Link href='/dashboard/settings/profile'>Profile</Link>
          <Link href='/dashboard/settings/password'>password</Link>
        </div>
        <div>
          <Link href='/city/london'>London</Link>
          <Link href='/city/Paris'>Paris</Link>
        </div>
      </body>
    </html>
  );
}
