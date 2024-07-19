import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css'

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chris Ingram – Entrepreneur & Full-Stack Software Engineer"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceCodePro.className}>{children}</body>
    </html>
  );
}
