import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/", // 👈 IMPORTANT for username.github.io repo
  plugins: [react(), tailwindcss()],
});
