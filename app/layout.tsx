import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import  Head  from "next/head";

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
  title: "NETWITX.com | Coming soon",
  description:
    "Next Generation of Web Development to make your game easier, Stay tuned!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Google Analytics Tracking Code */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-34VE5SMT0L`}
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-34VE5SMT0L');
          `}
        </script>
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
