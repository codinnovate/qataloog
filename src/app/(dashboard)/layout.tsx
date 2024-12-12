import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";


export const metadata: Metadata = {
  title: "Qataloog | Best Online Learning Platform - Learn New Skills Anytime , Anywhere",
  description: "Best Online Learning Platform - Learn New Skills Anytime , Anywhere",
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["100",  "400", "700","900"],
});


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={lato.className}
      >
        <Header />
        <main className="flex bg-[#fcfcff]">
          <Sidebar />
          <div className="flex  px-12 w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
