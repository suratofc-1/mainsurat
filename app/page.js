// Metadata SEO Lengkap
export const metadata = {
  metadataBase: new URL('https://suratberapa.com'),
  title: 'SURAT4D - Platform Terpercaya & Profesional',
  description: 'Daftar dan rasakan pengalaman bermain terbaik dengan sistem keamanan terenkripsi dan layanan 24/7.',
  keywords: ['SURAT4D', 'situs hiburan digital', 'platform terpercaya', 'game online resmi', 'daftar surat4d'],
  openGraph: {
    title: 'SURAT4D - Platform Terpercaya & Profesional',
    description: 'Daftar dan rasakan pengalaman bermain terbaik dengan sistem keamanan terenkripsi dan layanan 24/7.',
    url: 'https://suratberapa.com/?ref=linkhk/',
    siteName: 'SURAT4D',
    images: [{ url: '/thumbnail.webp', width: 1200, height: 630, alt: 'SURAT4D Official' }],
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="h-screen flex flex-col bg-[#0b1022] text-white overflow-hidden">
      
      {/* NAVBAR */}
      <nav className="flex-none p-5 text-center border-b border-blue-900 bg-[#0e1630]">
        <img src="/logo.png" alt="Logo SURAT4D" className="mx-auto h-12" />
      </nav>

      {/* AREA TENGAH */}
      <div className="flex-grow overflow-y-auto p-4 flex flex-col items-center">
        
        {/* BANNER */}
        <section className="w-full max-w-lg mt-2">
          <div className="relative border-2 border-blue-500 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(30,58,138,0.5)]">
            <img src="/banner.webp" alt="Banner Promo SURAT4D" className="w-full object-cover" />
          </div>
        </section>

        {/* TOMBOL LINK */}
        <section className="w-full max-w-sm mt-6 flex gap-4">
          <a href="https://static.zdassets.com/web_widget/latest/liveChat.html?v=10#key=surat4dcom.zendesk.com" target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-600 py-3 rounded-lg font-bold text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(22,163,74,0.6)] animate-pulse">
            LIVE CHAT
          </a>
          <a href="https://t.me/maxwinslotsurat4d" target="_blank" rel="noopener noreferrer" className="flex-1 bg-sky-600 py-3 rounded-lg font-bold text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(2,132,199,0.6)]">
            TELEGRAM
          </a>
        </section>

        {/* GRID KEUNGGULAN */}
        <section className="w-full max-w-lg mt-6 grid grid-cols-2 gap-4">
          <div className="bg-[#0e1630] p-4 rounded-xl border border-blue-900 text-center">
            <div className="text-xl mb-1">⚡</div>
            <div className="text-[10px] font-bold text-blue-400 uppercase">Proses Kilat</div>
          </div>
          <div className="bg-[#0e1630] p-4 rounded-xl border border-blue-900 text-center">
            <div className="text-xl mb-1">🛡️</div>
            <div className="text-[10px] font-bold text-blue-400 uppercase">Keamanan Terjamin</div>
          </div>
        </section>

        {/* INFO */}
        <section className="w-full max-w-lg mt-6 bg-[#0e1630] p-6 rounded-xl border border-blue-900">
          <h2 className="text-blue-400 font-bold border-b border-blue-800 pb-2 mb-4">KENAPA HARUS PILIH SURAT4D?</h2>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>• Nama Resmi: <span className="text-white">SURAT4D</span></li>
            <li>• Layanan: <span className="text-white">Profesional & Cepat</span></li>
            <li>• Transaksi: <span className="text-white">Hanya Hitungan Detik</span></li>
          </ul>
        </section>

        {/* TAMBAHAN E-E-A-T: KOMITMEN KEAMANAN */}
        <section className="w-full max-w-lg mt-6 bg-[#0e1630] p-6 rounded-xl border border-blue-900">
          <h2 className="text-lg font-bold text-blue-400 mb-4">Komitmen Keamanan & Layanan</h2>
          <div className="text-sm text-gray-300 space-y-4">
            <p><strong>Experience:</strong> SURAT4D telah berpengalaman dalam menyediakan platform hiburan digital yang stabil dan responsif.</p>
            <p><strong>Expertise:</strong> Tim profesional kami memastikan setiap transaksi diproses dengan akurasi tinggi dan cepat.</p>
            <p><strong>Trust:</strong> Kami menggunakan sistem enkripsi SSL untuk menjamin privasi data pribadi Anda tetap terjaga dengan aman.</p>
          </div>
        </section>

        {/* TAMBAHAN E-E-A-T: FAQ */}
        <section className="w-full max-w-lg mt-6 mb-8 bg-[#0e1630] p-6 rounded-xl border border-blue-900">
          <h2 className="text-lg font-bold text-blue-400 mb-4">Pertanyaan Umum (FAQ)</h2>
          <div className="space-y-4 text-sm text-gray-300">
            <div>
              <p className="font-bold text-white">Q: Apakah SURAT4D aman digunakan?</p>
              <p>A: Sangat aman. Kami menerapkan protokol keamanan enkripsi standar industri untuk melindungi seluruh aktivitas pengguna.</p>
            </div>
            <div>
              <p className="font-bold text-white">Q: Berapa lama waktu transaksi?</p>
              <p>A: Kami mengutamakan kecepatan. Rata-rata semua transaksi diselesaikan dalam hitungan detik.</p>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="flex-none p-4 border-t border-blue-900 bg-[#0b1022]">
        <div className="max-w-sm mx-auto flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <a href="https://suratberapa.com/?ref=linkhk/" className="bg-blue-600 text-center py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(37,99,235,0.7)]">DAFTAR</a>
            <a href="https://suratberapa.com/?ref=linkhk/" className="bg-blue-700 text-center py-4 rounded-xl font-bold border border-blue-600 transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(29,78,216,0.7)]">LOGIN</a>
          </div>
          <p className="text-center text-[10px] text-gray-500">© 2026 SURAT4D. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}