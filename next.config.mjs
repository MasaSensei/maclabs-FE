/** @type {import('next').NextConfig} */
import TerserPlugin from "terser-webpack-plugin";

const nextConfig = {
  env: {
    SERVER: process.env.SERVER,
  },
  output: "export",
  trailingSlash: true,
  generateBuildId: () => "MacLabs.co.id",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true,
            },
            mangle: true,
          },
          extractComments: false,
        })
      );
    }
    return config;
  },
};

export default nextConfig;
