import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base 設定為您的 GitHub 儲存庫名稱，前後需加上斜線
  // 這能確保部署到 GitHub Pages 後，網頁路徑不會出錯
  base: '/toen-pos/',
  
  // 如果您在開發過程中需要特定的伺服器設定，可以加在 server 區塊
  server: {
    port: 5173,
    host: true, // 允許透過區域網路（手機/平板）連線預覽
  }
})