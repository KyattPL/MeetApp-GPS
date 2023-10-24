import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            '/api': {
                target: 'http://74.234.48.140:8080',
                changeOrigin: true,
                secure: false,
                ws: true
            },
            '/oauth2/authorization/google': {
                target: 'http://74.234.48.140:8080',
                changeOrigin: true,
                secure: false,
                ws: true
            }
            // "/websockets": {
            //   target: "http://74.234.48.140:8080",
            //   ws: true,
            //   changeOrigin: true
            // }
        }
    },
    plugins: [svelte()]
});
