import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    base: "",
    plugins: [
        react({
            jsxImportSource: "@emotion/react",
            babel: {
                plugins: ["@emotion/babel-plugin"]
            }
        }),
        viteTsconfigPaths()
    ],
    server: {
        // this ensures that the browser opens upon server start
        open: true,
        // this sets a default port to 3003
        port: 3003
    }
});
