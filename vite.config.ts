import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Fixed port, clear of common dev defaults and of the siblings (kanban-experiment-web
// is 4610, kanban-experiment-api 4810, the relay server 4820). strictPort
// makes Vite fail loudly instead of silently picking another port.
const PORT = 4620

export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT,
    strictPort: true,
  },
  preview: {
    port: PORT,
    strictPort: true,
  },
})
