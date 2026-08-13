import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IGS – MIT Mysore",
  description:
    "Indian Geotechnical Society – MIT Mysore Student Chapter | Department of Civil Engineering, MIT Mysore",

  openGraph: {
    title: "IGS – MIT Mysore",
    description:
      "Indian Geotechnical Society – MIT Mysore Student Chapter | Department of Civil Engineering, MIT Mysore",
    url: "https://igs-mitm-website.vercel.app/",
    siteName: "IGS – MIT Mysore",
    type: "website",
    images: [
      {
        url: "https://igs-mitm-website.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "IGS – MIT Mysore",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IGS – MIT Mysore",
    description:
      "Indian Geotechnical Society – MIT Mysore Student Chapter",
    images: ["https://igs-mitm-website.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}