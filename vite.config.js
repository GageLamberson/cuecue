import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '4f3cad84d027.ngrok-free.app', // The specific host from your error
      '.ngrok-free.app'              // This allows ANY ngrok tunnel (useful if the URL changes)
    ]
  }
})