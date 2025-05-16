import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  base: '/ClubCenter/', // IMPORTANT: include the trailing slash
  plugins: [react()],
});