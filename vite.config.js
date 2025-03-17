import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/bunnyhop.github.io/', // Set base path for GitHub Pages
});
