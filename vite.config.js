
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/queue/",
  server:{
    port:5173,
    allowedHosts: ["digmap.shitai.co.uk"]
  }
})
