/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the site can be served by GitHub Pages (no Node server).
  output: "export",
  // GitHub Pages serves static files; Next's image optimizer needs a server, so disable it.
  images: { unoptimized: true },
  // Export each route as a folder with index.html — friendliest for static hosting.
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
