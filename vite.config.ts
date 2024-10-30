import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import version from "vite-plugin-package-version";

// https://vitejs.dev/config/
export default defineConfig({
  // Đường dẫn cơ sở cho GitHub Pages, thay đổi theo tên repo của bạn
  base: '/mina.github.io/', // Đảm bảo tên này khớp với tên repository trên GitHub
  plugins: [
    react(), // Sử dụng plugin React
    version() // Thêm plugin để quản lý phiên bản
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Chia nhỏ các chunk cho React và Lottie
          react: ["react", "react-dom"],
          lottie: ["react-lottie"],
        },
        // Bạn có thể sử dụng hàm này nếu muốn tự động chia nhỏ các mô-đun từ node_modules
        //
