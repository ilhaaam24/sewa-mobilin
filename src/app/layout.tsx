import Script from "next/script";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        {/* GA Script */}
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-N3T2VJ9MZM`} />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N3T2VJ9MZM', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
