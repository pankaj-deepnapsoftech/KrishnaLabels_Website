import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({

  theme:{
   extand:{
    
   }
  },

  plugins: [
    tailwindcss(),
  ],
  
})