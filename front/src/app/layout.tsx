import { ThemeProviderWrapper } from "@/providers/themeProvider";
import { WalletAdapterProvider } from "@/providers/walletAdapterProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UmiProvider } from "@/providers/umiProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dopamint.fun",
  description: "dopamint.fun is turning NFT minting into a dopamine experience",
  twitter: {
    card: "summary_large_image",
    title: "dopamint.fun",
    description:
      "dopamint.fun is turning NFT minting into a dopamine experience",
    creator: "@dopamintdotfun",
    images: ["https://dopamint-fun.vercel.app/twitter-og-image.png"], // You'll need to replace this with your actual image URL
  },
  openGraph: {
    title: "dopamint.fun",
    description:
      "dopamint.fun is turning NFT minting into a dopamine experience",
    images: ["https://dopamint-fun.vercel.app/twitter-og-image.png"], // You'll need to replace this with your actual image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WalletAdapterProvider>
      <UmiProvider>
        <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
          <body className={inter.className}>
            <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
          </body>
        </html>
      </UmiProvider>
    </WalletAdapterProvider>
  );
}
