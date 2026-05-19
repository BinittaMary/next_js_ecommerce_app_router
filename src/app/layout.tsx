import type { Metadata } from "next";
import { Roboto  } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./globals.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import BootstrapJS from "./components/BootstrapJS/BootstrapJS";
import Providers from "./components/Providers/Providers";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "eCommerce App",
  description: "Implemntation based on app routing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className} data-scroll-behavior="smooth">
      <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />
      </head>
      <body>
        <Providers>
        <BootstrapJS />
        <Header />
        <NavBar />
        {children}
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
