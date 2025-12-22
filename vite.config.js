import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [react(), tailwindcss()],
});
