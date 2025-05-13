import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
