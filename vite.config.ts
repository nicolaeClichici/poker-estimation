import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 7777,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // so "@/shared" works
    },
  },
});
