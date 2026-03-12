import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BidScout – Procurement Intelligence for Small Contractors",
  description: "Stop missing bids. Start winning contracts. BidScout tracks government procurement opportunities so you never miss a deadline.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
