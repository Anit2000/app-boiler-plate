import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define:{
    "process.env.APP_CLIENT_ID":JSON.stringify(process.env.APP_CLIENT_ID),
  },

  plugins: [react()],
})
