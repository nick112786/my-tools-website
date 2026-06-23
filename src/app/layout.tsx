import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🌟 全站骨架 metadata：已幫你精確對齊 Google 要求的正確驗證代碼
export const metadata: Metadata = {
  title: "SmartTools 數位效率工具箱",
  description: "由資深開發者打造的免費數位效率工具箱。提供台灣支票套印工具、辦公自動化小程式免費下載。",
  verification: {
    // 🎯 這裡已經換成 Google 在 image_0b78fb.png 中向你索取的專屬正確代碼了！
    google: "MBxWenqNx37SdFe3EfBZtVQA-d4Zt_BnAWUzq-n9-o", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-slate-100`}
      >
        {/* 自動將 page.tsx 的首頁工具箱內容渲染於此 */}
        {children}
      </body>
    </html>
  );
}