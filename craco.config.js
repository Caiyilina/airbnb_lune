const path = require("path");
const CracoLessPlugin = require("craco-less");

const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  plugins: [
    {
      // 配置less
      plugin: CracoLessPlugin,
    },
  ],
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
      assets: resolve("src/assets"),
    },
  },
};
