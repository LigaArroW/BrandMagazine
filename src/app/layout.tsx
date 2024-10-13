import type { Metadata } from "next";
import { Providers } from "./providers";
import { Footer } from "@/widgets/Footer";
import MainProvider from "@/shared/components/Contex/MainProvider";
import HeaderWrapper from "@/widgets/HeaderWrapper/HeaderWrapper";
import "./globals.scss";

// const inter = Inter({ subsets: ["latin"] });

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
      <body className={"flex flex-col min-h-screen"}>
        <Providers>
          <MainProvider>
            <div id="modal-portal">
              <HeaderWrapper />
              <main>{children}</main>
              <Footer />
            </div>
          </MainProvider>
        </Providers>
      </body>
    </html>
  );
}
