import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "login.html"),
        register: resolve(__dirname, "register.html"),
        jsfile: resolve(__dirname, "script.js")
      },
      output: {
				// Default
				// dir: 'dist',
				// With laravel: laravel-app/public/js
				dir: 'dist',
				entryFileNames: 'app-script.js'
			}
    },
  },
});
