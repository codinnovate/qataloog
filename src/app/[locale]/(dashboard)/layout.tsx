import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../../globals.css";;
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';


export const metadata: Metadata = {
  title: "Qataloog | Best Online Learning Platform - Learn New Skills Anytime , Anywhere",
  description: "Best Online Learning Platform - Learn New Skills Anytime , Anywhere",
};


const lato = Lato({
  subsets: ["latin"],
  weight: ["100",  "400", "700","900"],
});


export default async function DashboardLayout({
  children,params:{locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};

}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={lato.className}
      >
        <NextIntlClientProvider messages={messages}>
        <Header />
        <main className="flex bg-[#fcfcff]">
          <Sidebar className='hidden md:flex' />
          <div className="flex  px-2 md:px-10 w-full">
            {children}
          </div>
        </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
