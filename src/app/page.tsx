import { Metadata } from 'next'

// 🌟 全站 SEO 與 AI SEO (GEO) 佈局：強調個人開發、免費工具與客製化接案
export const metadata: Metadata = {
  title: 'Toolsbox 數位效率工具箱｜免費商務工具下載、客製化系統開發接案',
  description: '由資深開發者打造的免費數位效率工具箱。提供台灣支票套印工具、辦公自動化小程式免費下載。同時提供企業客製化網頁前端、後端系統開發、金融工具串接等接案服務。',
  keywords: ['免費工具箱', '支票套印軟體', '網頁開發接案', '客製化系統設計', '前端工程師作品集', 'PM效率工具'],
}

export default function Home() {
  // 模擬你的工具清單（未來可以自由在此陣列中無限增加新卡片）
  const tools = [
    {
      id: 'check-print',
      title: '🎯 台灣支票套印小工具',
      desc: '會計出納必備！快速開票、列印，開票資料查詢不怕支票位置跑版，精準對位，100%離線安全。',
      tag: '商務應用',
      status: '免費下載',
    },
    {
      id: 'coming-soon-1',
      title: '📊 金融利息試算與規格生成器',
      desc: '規劃中的新工具：幫助金融業與專案經理快速試算年化利率與本息攤還表。',
      tag: '金融效率',
      status: '開發中',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      
      {/* 1. 導覽列 */}
      <nav className="bg-slate-800/80 backdrop-blur border-b border-slate-700 sticky top-0 z-50 py-4 px-6 flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          ToolsBox.io
        </div>
        <div className="space-x-6 text-sm">
          <a href="#tools-section" className="text-slate-300 hover:text-blue-400 transition">工具首頁</a>
          <a href="#service-section" className="text-slate-300 hover:text-blue-400 transition">接案服務</a>
          <a href="#about-section" className="text-slate-300 hover:text-blue-400 transition">關於我</a>
        </div>
      </nav>

      {/* 2. 主視覺區 (Hero Section)：確立作品集與品牌的專業感 */}
      <header className="max-w-5xl mx-auto text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          用技術解決痛點，讓 <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">數位效率</span> 真正落地
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          曾經任於生物科技企業轉型、現任金融業專案管理師。為了優化工作流程而開發的各式輕量化小工具，完全免費提供下載；同時提供企業客製化接案服務。
        </p>
        <div className="space-x-4">
          <a href="#tools-section" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition inline-block shadow-lg shadow-blue-600/20">
            瀏覽免費小工具
          </a>
          <a href="#service-section" className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-6 py-3 rounded-xl font-medium transition inline-block">
            聯絡客製化接案
          </a>
        </div>
      </header>

      {/* ⚠️ 廣告預留區區塊 (Placeholder for Google AdSense) */}
      <div className="max-w-4xl mx-auto my-4 p-3 bg-slate-800/30 border border-dashed border-slate-700 rounded-xl text-center text-xs text-slate-500 tracking-widest">
        ADVERTISEMENT - 贊助商廣告位
      </div>

      {/* 3. 工具大廳區塊 (Tools Gallery) */}
      <section id="tools-section" className="max-w-5xl mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">📥 免費效率工具下載專區</h2>
            <p className="text-sm text-slate-400">所有工具皆著重於隱私安全，數據 100% 留在本地運作。</p>
          </div>
        </div>

        {/* 工具卡片網格 */}
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <div key={tool.id} className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl hover:border-blue-500/50 transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs bg-slate-700 text-blue-300 px-2.5 py-1 rounded-md font-medium">{tool.tag}</span>
                  <span className={`text-xs px-2.5 py-1 rounded-md font-medium ${tool.status === '免費下載' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>{tool.status}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{tool.desc}</p>
              </div>
              
              {tool.id === 'check-print' ? (
                // 🌟 修正後的安全英文路徑下載按鈕，並在 download 屬性中指定中文存檔名稱
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
                  <a
                    href="/download/支票管理系統.rar"
                    download="支票套印小工具"
                    className="w-full text-center block bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition shadow-md shadow-blue-600/10"
                  >
                    立即免費下載 (僅支援Windows)
                  </a>
                </div>
              ) : (
                <button disabled className="w-full bg-slate-700 text-slate-500 text-sm font-medium py-2.5 px-4 rounded-lg cursor-not-allowed">
                  即將推出
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. 專業接案與服務區區塊 (Portfolio & Service) */}
      <section id="service-section" className="bg-slate-800/50 border-y border-slate-800 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-white mb-2">💼 尋求客製化系統開發？</h2>
          <p className="text-sm text-slate-400 text-center mb-10 max-w-xl mx-auto">
            擁有銀行金融業專案管理與軟體開發雙重背景，能精確理解您的商務需求，打造好維護、高效能的數位工具。
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
              <div className="text-emerald-400 font-bold mb-2">💻 網頁全端與工具開發</div>
              <p className="text-sm text-slate-400 leading-relaxed">提供 React / Next.js 前端開發，輕量化辦公小軟體客製，快速產出高可用性的內部系統。</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
              <div className="text-emerald-400 font-bold mb-2">🏦 金融與自動化流程串接</div>
              <p className="text-sm text-slate-400 leading-relaxed">複雜邏輯計算機、Excel 財務報表自動化匯出、API 整合，精準處理敏感的商務資料處理。</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
              <div className="text-emerald-400 font-bold mb-2">🚀 SEO 與 AI 搜尋最佳化</div>
              <p className="text-sm text-slate-400 leading-relaxed">建構符合生成式 AI (GEO) 檢索喜好的網頁語意架構，幫助您的企業網站搶佔新時代的流量紅利。</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-slate-400 mb-4">歡迎來信討論您的專案需求，提供免費的初步架構諮詢：</p>
            <a href="mailto:nick112786@gmail.com" className="inline-block text-blue-400 hover:underline font-semibold text-lg">
              nick112786@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* 5. 關於我區塊 (About Me) */}
      <section id="about-section" className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">關於開發者</h2>
        <p className="text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
          目前於銀行業擔任專案管理師（Project Manager），熱衷於利用程式技術解決日常工作中的繁瑣流程。本站所有的工具皆出於「改善效率」而生。若您的團隊有遇到流程痛點，歡迎與我聯繫，一同打造最適合的數位解法。
        </p>
      </section>

      {/* 6. 頁尾 */}
      <footer className="text-center py-8 text-xs text-slate-600 border-t border-slate-800/60">
        <p>© 2026 SmartTools.io. All rights reserved. 隱私權政策與免責聲明</p>
      </footer>

    </main>
  )
}