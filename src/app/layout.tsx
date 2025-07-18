import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Watchdog Media',
  description:
    'Watchdog Media - Your source for media consulting and development',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
