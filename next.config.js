/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "internacional.s3.sa-east-1.amazonaws.com",
      "internacionalcloudfront.eleventickets.com",
    ],
    // remotePatterns: [
    //   { hostname: "s3.amazonaws.com" },
    //   { hostname: "eleventickets.com" },
    // ],
  },
};

module.exports = nextConfig;
