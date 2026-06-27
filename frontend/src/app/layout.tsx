import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "문지현 자기소개",
  description: "AI 기반 지능형 정제 역할을 소개하는 문지현의 자기소개 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
