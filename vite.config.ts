import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Standard React Plugin (sicherer)
import path from 'path';

export default defineConfig({
  plugins: [react()],
  
  // WICHTIG: Das hier sorgt dafür, dass GitHub Pages die Dateien findet
  base: '/PeerUp/', 

  resolve: {
    // Dieser Alias ist wichtig für deine Komponenten (Shadcn UI etc.)
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    target: 'esnext',
    outDir: 'build', // Das hier passt zu deinem Deployment-Befehl
  },

  server: {
    port: 3000,
    open: true,
  },
});