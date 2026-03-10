import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Если используешь v4

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/fkjvhfijdbhdfknskfjwpfdwjfbfbofs/', // ОБЯЗАТЕЛЬНО: название папки на GitHub
})