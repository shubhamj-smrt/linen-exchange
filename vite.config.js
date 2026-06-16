import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  server: {
    open: '/Linen Exchange.dc.html',
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'Linen Exchange.dc.html'),
      },
    },
  },
})
