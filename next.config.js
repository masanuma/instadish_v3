/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "standalone",
  images: { domains: [], formats: ["image/webp"] },
  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: false }
}
module.exports = nextConfig
