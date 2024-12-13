/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'imgur.com'],
  },
  output: 'standalone'
};

export default nextConfig;
