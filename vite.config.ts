import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so assets resolve correctly under the GitHub Pages
  // project subpath (https://<user>.github.io/<repo>/) without hardcoding it.
  base: './',
  plugins: [react()],
})
