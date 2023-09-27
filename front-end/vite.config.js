import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.APP_BASE_URL": JSON.stringify(env.APP_BASE_URL),
      "process.env.AXIOS_BASE_URL": JSON.stringify(env.AXIOS_BASE_URL),
      // If you want to exposes all env variables, which is not recommended
      // 'process.env': env
    },
  };
});
