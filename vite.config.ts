import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// WICHTIG: Ersetze 'PeerUp' mit exakt dem Namen deines GitHub Repositories (Groß-/Kleinschreibung beachten!)
export default defineConfig({
  plugins: [react()],
  base: '/PeerUp/', 
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist', // Standard ist 'dist', besser so lassen
  },
  server: {
    port: 3000,
    open: true,
  },
});