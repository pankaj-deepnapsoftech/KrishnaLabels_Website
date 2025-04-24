import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({

  theme:{
   extend:{
    font-family: "Raleway", sans-serif;

}
   }
  },

  plugins: [
    tailwindcss(),
  ],
  
})