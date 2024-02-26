import { Gabarito } from "next/font/google";
import "./globals.css";
import NavigationsBar from "@/components/NavigationsBar";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Vibes Anime List",
  description: "Website Anime List",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.className} bg-color-dark`}
        suppressHydrationWarning={true}>
        <NavigationsBar />
        {children}
      </body>
    </html>
  );
}
