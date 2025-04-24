import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({

  theme:{
   extend:{
    fontfamily:{ "Raleway", sans-serif;}

}
   }
  },

  plugins: [
    tailwindcss(),
  ],
  
})