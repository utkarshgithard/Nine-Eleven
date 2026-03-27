import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "nine2Eleven — Every Meal, Every Moment",
  description:
    "nine2Eleven offers premium food services including Mess Facility, Canteen, Restaurant, and Catering & Events. Get in touch to customize your plan.",
  keywords:
    "mess facility, canteen services, catering events, restaurant, food service, nine2eleven",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  openGraph: {
    title: "nine2Eleven — Every Meal, Every Moment",
    description:
      "Premium food services — Mess, Canteen, Restaurant, and Catering under one roof.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${nunito.variable} h-full`}
    >
      <body className="min-h-full bg-cream text-mahogany font-nunito antialiased">
        <Loader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
