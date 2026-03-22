import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "نام شما | منتور فرانت‌اند و توسعه‌دهنده",
  description:
    "جلسات منتورینگ برای دانش‌آموزان دبیرستانی و دانشجویان دانشگاه برای شروع حرفه مهندسی نرم‌افزار.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <body className={vazirmatn.className}>{children}</body>
    </html>
  );
}
