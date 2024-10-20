/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";

// Fungsi untuk mendapatkan path module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  images: {
    domains: ["cdn.dribbble.com"], // Tambahkan domain yang diizinkan di sini
  },
  webpack: (config, { isServer }) => {
    // Modifikasi konfigurasi Webpack di sini
    if (!isServer) {
      config.resolve.alias["locomotive-scroll"] = path.resolve(
        __dirname,
        "node_modules/locomotive-scroll"
      );
    }

    return config;
  },
};

export default nextConfig;
