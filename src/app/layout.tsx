import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Head from "./components/Head";
import Header from "./components/Header";
import Section from "./components/Section";
import Para from "./components/Para";
import Lastsection from "./components/Lastsection";
import Footer from "./components/Footer";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <Hero/>
        <Banner/>
        <Head/>
      <Header/>
      <Section/>
      <Para/>
      <Lastsection/>
      <Footer/>
        {children}
       
      </body>
    </html>
  );
}
