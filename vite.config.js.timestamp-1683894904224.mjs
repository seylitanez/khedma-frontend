// vite.config.js
import { defineConfig } from "file:///C:/Users/lyes/Desktop/khedma_frontend2/khedma-frontend/node_modules/.pnpm/vite@4.1.4_sass@1.58.3/node_modules/vite/dist/node/index.js";
import path from "path";
import react from "file:///C:/Users/lyes/Desktop/khedma_frontend2/khedma-frontend/node_modules/.pnpm/@vitejs+plugin-react@3.1.0_vite@4.1.4/node_modules/@vitejs/plugin-react/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\lyes\\Desktop\\khedma_frontend2\\khedma-frontend";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    port: 9710,
    proxy: {
      "/api": {
        target: "http://localhost:9630",
        changeOrigin: false,
        secure: false
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src"),
      "@components": path.resolve(__vite_injected_original_dirname, "src/components"),
      "@p-components": path.resolve(__vite_injected_original_dirname, "src/components/public"),
      "@pr-components": path.resolve(__vite_injected_original_dirname, "src/components/private"),
      "@pages": path.resolve(__vite_injected_original_dirname, "src/pages"),
      "@p-pages": path.resolve(__vite_injected_original_dirname, "src/pages/public"),
      "@pr-employe-pages": path.resolve(__vite_injected_original_dirname, "src/pages/private/employe"),
      "@pr-employeur-pages": path.resolve(__vite_injected_original_dirname, "src/pages/private/employeur"),
      "@pr-moderateur-pages": path.resolve(__vite_injected_original_dirname, "src/pages/private/moderateur"),
      "@utils": path.resolve(__vite_injected_original_dirname, "src/utils"),
      "@service": path.resolve(__vite_injected_original_dirname, "src/service"),
      "@helper": path.resolve(__vite_injected_original_dirname, "src/helper"),
      "@style": path.resolve(__vite_injected_original_dirname, "src/styles"),
      "@langue": path.resolve(__vite_injected_original_dirname, "src/lang"),
      "@context": path.resolve(__vite_injected_original_dirname, "src/context"),
      "@image": path.resolve(__vite_injected_original_dirname, "src/assets")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/color.scss";`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxseWVzXFxcXERlc2t0b3BcXFxca2hlZG1hX2Zyb250ZW5kMlxcXFxraGVkbWEtZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGx5ZXNcXFxcRGVza3RvcFxcXFxraGVkbWFfZnJvbnRlbmQyXFxcXGtoZWRtYS1mcm9udGVuZFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbHllcy9EZXNrdG9wL2toZWRtYV9mcm9udGVuZDIva2hlZG1hLWZyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgc2VydmVyOntcclxuICAgIHBvcnQ6OTcxMCxcclxuICAgIHByb3h5OiB7XHJcbiAgICAgICcvYXBpJzoge1xyXG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6OTYzMCcsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiBmYWxzZSxcclxuICAgICAgICBzZWN1cmU6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzpwYXRoLnJlc29sdmUoX19kaXJuYW1lLCdzcmMnKSxcclxuICAgICAgJ0Bjb21wb25lbnRzJzpwYXRoLnJlc29sdmUoX19kaXJuYW1lLCdzcmMvY29tcG9uZW50cycpLFxyXG4gICAgICAnQHAtY29tcG9uZW50cyc6cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwnc3JjL2NvbXBvbmVudHMvcHVibGljJyksXHJcbiAgICAgICdAcHItY29tcG9uZW50cyc6cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwnc3JjL2NvbXBvbmVudHMvcHJpdmF0ZScpLFxyXG4gICAgICAnQHBhZ2VzJzpwYXRoLnJlc29sdmUoX19kaXJuYW1lLCdzcmMvcGFnZXMnKSxcclxuICAgICAgJ0BwLXBhZ2VzJzpwYXRoLnJlc29sdmUoX19kaXJuYW1lLCdzcmMvcGFnZXMvcHVibGljJyksXHJcbiAgICAgICdAcHItZW1wbG95ZS1wYWdlcyc6cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwnc3JjL3BhZ2VzL3ByaXZhdGUvZW1wbG95ZScpLFxyXG4gICAgICAnQHByLWVtcGxveWV1ci1wYWdlcyc6cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwnc3JjL3BhZ2VzL3ByaXZhdGUvZW1wbG95ZXVyJyksXHJcbiAgICAgICdAcHItbW9kZXJhdGV1ci1wYWdlcyc6cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwnc3JjL3BhZ2VzL3ByaXZhdGUvbW9kZXJhdGV1cicpLFxyXG4gICAgICAnQHV0aWxzJzpwYXRoLnJlc29sdmUoX19kaXJuYW1lLCdzcmMvdXRpbHMnKSxcclxuICAgICAgJ0BzZXJ2aWNlJzpwYXRoLnJlc29sdmUoX19kaXJuYW1lLCdzcmMvc2VydmljZScpLFxyXG4gICAgICAnQGhlbHBlcic6cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwnc3JjL2hlbHBlcicpLFxyXG4gICAgICAnQHN0eWxlJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwnc3JjL3N0eWxlcycpLFxyXG4gICAgICAnQGxhbmd1ZSc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsJ3NyYy9sYW5nJyksXHJcbiAgICAgICdAY29udGV4dCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsJ3NyYy9jb250ZXh0JyksXHJcbiAgICAgICdAaW1hZ2UnOnBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsJ3NyYy9hc3NldHMnKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgc2Nzczoge1xyXG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgQGltcG9ydCBcIkAvc3R5bGVzL2NvbG9yLnNjc3NcIjtgLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVyxTQUFTLG9CQUFvQjtBQUM3WCxPQUFPLFVBQVU7QUFDakIsT0FBTyxXQUFXO0FBRmxCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixRQUFPO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFJLEtBQUssUUFBUSxrQ0FBVSxLQUFLO0FBQUEsTUFDaEMsZUFBYyxLQUFLLFFBQVEsa0NBQVUsZ0JBQWdCO0FBQUEsTUFDckQsaUJBQWdCLEtBQUssUUFBUSxrQ0FBVSx1QkFBdUI7QUFBQSxNQUM5RCxrQkFBaUIsS0FBSyxRQUFRLGtDQUFVLHdCQUF3QjtBQUFBLE1BQ2hFLFVBQVMsS0FBSyxRQUFRLGtDQUFVLFdBQVc7QUFBQSxNQUMzQyxZQUFXLEtBQUssUUFBUSxrQ0FBVSxrQkFBa0I7QUFBQSxNQUNwRCxxQkFBb0IsS0FBSyxRQUFRLGtDQUFVLDJCQUEyQjtBQUFBLE1BQ3RFLHVCQUFzQixLQUFLLFFBQVEsa0NBQVUsNkJBQTZCO0FBQUEsTUFDMUUsd0JBQXVCLEtBQUssUUFBUSxrQ0FBVSw4QkFBOEI7QUFBQSxNQUM1RSxVQUFTLEtBQUssUUFBUSxrQ0FBVSxXQUFXO0FBQUEsTUFDM0MsWUFBVyxLQUFLLFFBQVEsa0NBQVUsYUFBYTtBQUFBLE1BQy9DLFdBQVUsS0FBSyxRQUFRLGtDQUFVLFlBQVk7QUFBQSxNQUM3QyxVQUFVLEtBQUssUUFBUSxrQ0FBVSxZQUFZO0FBQUEsTUFDN0MsV0FBVyxLQUFLLFFBQVEsa0NBQVUsVUFBVTtBQUFBLE1BQzVDLFlBQVksS0FBSyxRQUFRLGtDQUFVLGFBQWE7QUFBQSxNQUNoRCxVQUFTLEtBQUssUUFBUSxrQ0FBVSxZQUFZO0FBQUEsSUFDOUM7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
