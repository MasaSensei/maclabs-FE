/** @type {import('next').NextConfig} */
import { config } from "dotenv";
import { resolve } from "path";
import { existsSync, readFileSync } from "fs";

const envFilePath = resolve(process.cwd(), ".env");
if (existsSync(envFilePath)) {
  const envFile = readFileSync(envFilePath, "utf8");
  config({ path: envFilePath, override: true });
}

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
};

export default nextConfig;
