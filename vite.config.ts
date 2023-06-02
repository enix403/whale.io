import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4200,
    host: "0.0.0.0"
  },
  plugins: [tsconfigPaths(), react()]
});
