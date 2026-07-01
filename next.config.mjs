/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // Sanity Studio (embedded) uses styled-components under the hood.
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
