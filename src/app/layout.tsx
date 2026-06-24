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

// ==========================================
// 關鍵字與 SEO 標籤優化設定 (Metadata)
// ==========================================
export const metadata: Metadata = {
  title: "精選工具箱 ｜ 高效作業管理與流程優化",
  description: "專為工作優化打造的線上工具集。提供高效的專案排程、數據轉換與報表檢查工具，助您簡化日常工作流程，提升跨部門溝通效率。",
  keywords: [
    "專案管理工具",
    "PM 工具箱",
    "金融業專案管理",
    "銀行 PM 工具",
    "工作流程自動化",
    "線上工具集",
    "Next.js 工具網站",
    "效率提升工具",
    "支票管理系統",
    "支票套印",
    "支票列印",
    "台灣銀行",
    "華南銀行",
    "新光銀行",
    "台中銀行",
    "富邦銀行",
    "台新銀行",
    "中國信託銀行",
    "國泰世華銀行",
    "玉山銀行",
    "土地銀行",
    "第一銀行",
    "銀行支票",
    "支票怎麼印",
    "ERP系統",
    "ERP軟體",
    "取代ERP",
  ],
  // 讓搜尋引擎爬蟲正確索引
  robots: {
    index: true,
    follow: true,
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
        {children}
      </body>
    </html>
  );
}