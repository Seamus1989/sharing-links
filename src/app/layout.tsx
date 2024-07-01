import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const baseSocialMediaShareData = {
  title: "Sprice",
  description: "Link Sharing Done Right",
  url: "https://sharing-links-woad.vercel.app/",
  siteName: "Sprice",
  images: [
    {
      url: "<generated>",
      width: 600,
      height: 600,
      alt: "Some tasty watermelon",
      type: "<generated>",
    },
  ],
  locale: "en_US",
  type: "website",
};

export const metadata = {
  title: "Sprice!",
  description: "Link Sharing Done Right!",
  openGraph: baseSocialMediaShareData,
  twitter: baseSocialMediaShareData,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
