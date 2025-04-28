import type { Metadata } from "next";
import { Sora, DM_Sans } from 'next/font/google';
import "./styles/globals.sass";
import 'bootstrap-icons/font/bootstrap-icons.css';

import Navbar from "./_components/navbar";

const sora = Sora({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Mobius Services LLC | job search",
  description: "Mobius Services LLC is a job applications engine to help you get interviews fast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className}`}>
      <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
