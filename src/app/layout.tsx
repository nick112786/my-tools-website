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

// 🌟 全站骨架 metadata：在這裡統一架設 Google 驗證天線
export const metadata: Metadata = {
  title: "SmartTools 數位效率工具箱",
  description: "由資深開發者打造的免費數位效率工具箱。提供台灣支票套印工具、辦公自動化小程式免費下載。",
  // 📥 就在這裡！請把引號內換成你剛剛在 Google 複製的那串專屬金鑰
  verification: {
    google: "MBxWenqNx37SdFe3EfBZtvQA-d4Zt_BnAWUzq-n9-o", 
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
        {/* children 會自動把 page.tsx 的首頁工具箱內容塞進這裡 */}
        {children}
      </body>
    </html>
  );
}