const prod = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
module.exports = {
  assetPrefix: prod ? "/resume/" : "",
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
  generate: {
    nojekyll: true,
  },
};
