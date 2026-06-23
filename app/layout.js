import "./globals.css";

export const metadata = {
  title: 'SURAT4D - Platform Digital Terpercaya',
  description: 'SURAT4D adalah platform digital modern dengan layanan 24/7, keamanan data terbaik, dan antarmuka yang responsif.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}