import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match your GitHub Pages repo path: kaushikpuka1998.github.io/portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
