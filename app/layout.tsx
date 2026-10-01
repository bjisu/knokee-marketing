import type { Metadata } from "next";
import { pageInfo } from "@/data/research";
import "./globals.css";

export const metadata: Metadata = {
  title: pageInfo.title,
  description: pageInfo.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
