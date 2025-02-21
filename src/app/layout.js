import { Poppins } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Sklep internetowy Karcher | Erpixkarcher24.pl",
  description: "Tylko w naszym sklepie online wszystkie wyroby marki Karcher \u2611\ufe0f Kupisz tu  ka\u017cde urz\u0105dzenie niezb\u0119dne do sprz\u0105tania i mycia \u2611\ufe0f Fachowe doradztwo i bogaty wyb\u00f3r",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins}
      >
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}
