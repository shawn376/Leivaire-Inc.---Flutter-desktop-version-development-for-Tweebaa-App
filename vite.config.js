import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

export default defineConfig({
  base: './',
  plugins: [uni()],

  build: {
      rollupOptions: {
        external: ['body-parser']
      }
    }
  // build: {
  //   minify: 'terser',
  //   terserOptions: {
  //     compress: {
  //       drop_console: true,
  //     },
  //   },
  // },
})
