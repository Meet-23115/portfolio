import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    additionalData: `$var: red;`,
  },
};

export default nextConfig;
