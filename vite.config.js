import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ghPages from "vite-plugin-gh-pages";

export default defineConfig({
    plugins: [react(), ghPages()],
    base: "/<your-repo-name>/", // Replace <your-repo-name> with the name of your GitHub repository
});
