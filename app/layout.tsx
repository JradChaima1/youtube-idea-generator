import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: "YT Idea Generator",
  description: "Generate creative YouTube video ideas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body className={`${lato.className} h-full bg-gray-50 antialiased`}>
          <div className="flex h-full">
            <Navbar />
            <main className="flex-1 min-h-screen pl-0 lg:pl-10">
              {children}
              <Toaster/>
            </main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}