import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from "vite-plugin-pages";
import { minifyHtml, injectHtml } from 'vite-plugin-html'
const path = require('path')
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    vue({}),
    
    Pages({
      pagesDir: "src/pages",
      exclude: ["**/components/*.vue"],
    }),
    minifyHtml(),
    injectHtml({
      injectData: {
        title: "FrontEnd",
      },
    }),
  ]
})

