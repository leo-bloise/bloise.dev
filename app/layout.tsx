import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/Menu";

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
        className='antialiased'
      >
        <Menu />
        <div className="p-5">
          {children}
        </div>
      </body>
    </html>
  );
}
