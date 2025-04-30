import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'



export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
  allowedHosts: ['1e34b047-37ad-4ecb-83c1-d22ea4fe1433-00-d6je6zgknh18.sisko.replit.dev']
  }
})
