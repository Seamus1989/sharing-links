import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

const baseSocialMediaShareData = {
  title: "Sprice Competition",
  description: "Enter our Competition",
  url: "https://sharing-links-woad.vercel.app/",
  siteName: "Sprice",
  images: [
    {
      url: "<generated>",
      width: 600,
      height: 600,
      alt: "Some tasty bread!",
      type: "<generated>",
    },
  ],
  locale: "en_US",
  type: "website",
};

export const metadata = {
  title: "Sprice Competition!",
  description: "Enter our Competition!",
  openGraph: baseSocialMediaShareData,
  twitter: baseSocialMediaShareData,
};

export default function CompLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
