import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Ini perintah wajib untuk membuat folder 'out'
  images: {
    unoptimized: true, // Wajib jika menggunakan 'output: export'
  },
};

export default nextConfig;