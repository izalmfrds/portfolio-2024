/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.dribbble.com"], // Tambahkan domain yang diizinkan di sini
  },
  webpack: (config, { isServer }) => {
    // Modifikasi konfigurasi Webpack di sini
    if (!isServer) {
      config.resolve.alias["locomotive-scroll"] =
        require.resolve("locomotive-scroll");
    }

    return config;
  },
};

export default nextConfig;
