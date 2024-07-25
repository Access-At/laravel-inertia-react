import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/frontend/app.tsx",
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./resources/frontend"),
            "@ui": path.resolve(
                __dirname,
                "./resources/frontend/components/ui"
            ),
        },
    },
    build: {
        cssMinify: "lightningcss",
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return id
                            .toString()
                            .split("node_modules/")[1]
                            .split("/")[0]
                            .toString();
                    }
                },
            },
        },
        minify: "terser", // use terser for better minification
        terserOptions: {
            compress: {
                drop_console: true, // remove console logs
                drop_debugger: true, // remove debugger statements
            },
        },
    },
});
