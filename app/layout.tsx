import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/Menu";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "ApoloCode36",
  description: "36 is the anwser, we must now look for the question",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" 
      className="bg-vscode-background font-gabarito h-[100vh]">
      <body
        className='antialiased body'
      >
        <Menu links={[
          {
            image: <Image src={"/book.webp"} width={25} height={25} className="mt-1" alt="Blog" />,
            label: 'Blog',
            link: '/blog'
          }
        ]}/>
        <Sidebar />
        <div className="content">
          {children}
        </div>
      </body>
    </html>
  );
}
