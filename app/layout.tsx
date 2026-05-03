import type { Metadata } from "next";
import { Slabo_27px } from "next/font/google";
import "./globals.css";
import CartProvider from "@/context/CartContext";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const slabo = Slabo_27px({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-slabo", // Optional: for Tailwind CSS
});

export const metadata: Metadata = {
  title: "Coffee Time | Handcrafted Brews & Artisanal Pastries",
  description:
    "Experience the art of the perfect coffee moment at Coffee Time. From Ethiopian Yirgacheffe to our signature Spanish Latte, we bring world-class roasting to your cup.",
  keywords: [
    "Coffee Time",
    "Artisanal Coffee",
    "Specialty Roastery",
    "Best Coffee in Biskra", // Geographic relevance
    "Oat Milk Latte",
    "Cold Brew",
    "Pastries",
  ],
  authors: [{ name: "Elite Digital DZ" }], // Your agency name
  openGraph: {
    title: "Coffee Time | The Art of the Perfect Coffee Moment",
    description:
      "Small-batch roasts and flaky pastries delivered with craftsmanship since 2016.",
    url: "https://coffeetime.dz", // Replace with your actual domain
    siteName: "Coffee Time",
    images: [
      {
        url: "/og-image.jpg", // Create an image for social sharing
        width: 1200,
        height: 630,
        alt: "Coffee Time Interior and Signature Drinks",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee Time | Artisanal Coffee Experience",
    description:
      "From bean to cup, explore our curated menu of specialty coffees and French pastries.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${slabo.className} h-full antialiased`}>
      <CartProvider>
        <body className="min-h-full flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              // This ensures the description text is visible against the dark background
              style: {
                background: "#3D2314",
                color: "#FCF9F5",
              },
            }}
          />
        </body>
      </CartProvider>
    </html>
  );
}
