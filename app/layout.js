import {Hind_Madurai} from "next/font/google";
import "./globals.css";

const hind_madurai = Hind_Madurai({subsets: ['latin'], weight: ['600']})

export const metadata = {
  title: "GeminiAI-Oktatás",
  description: "Generated study content by GeminiAI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body
        className={hind_madurai.className}
      >
        {children}
      </body>
    </html>
  );
}
