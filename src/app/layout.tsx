import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Providers } from "./providers";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import MainProvider from "@/shared/components/Contex/MainProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Replik Store",
  description: "Зеркальные реплики мировых брендов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className + (" flex flex-col min-h-screen")}>
        <Providers>
          <MainProvider>
            <div id="modal-portal" >
              <Header />
              {children}
              <Footer />
            </div>
          </MainProvider>
        </Providers>
      </body>
    </html>
  );
}
