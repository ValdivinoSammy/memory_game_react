
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/memory_game_react/',
  server: {
    watch: {
      usePolling: true,
    },
  },
})
