import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import JsonLd from "@/components/seo/JsonLd";

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
  title: "nine2Eleven — Best Hostel Mess & Canteen in Danapur, Patna",
  description:
    "nine2Eleven offers premium food services including Mess Facility, Canteen management, Dhaba, Food Manpower, and Event Catering in Danapur, Patna. Wholesome home-style meals for all.",
  keywords:
    "best hostel mess service in Danapur, canteen management Patna, professional catering Bihar, nine2eleven food services, restaurant Danapur Patna, hostel food subscriptions",
  openGraph: {
    title: "nine2Eleven — Every Meal, Every Moment | Danapur, Patna",
    description:
      "Premium food services — Mess, Canteen, Dhaba, Food Manpower, and Catering in Danapur, Patna. Wholesome home-cooked meals every day.",
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: "https://nine2eleven.in",
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
        <JsonLd />
        <Loader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
