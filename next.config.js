/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "internacional.s3.sa-east-1.amazonaws.com",
      "internacionalcloudfront.eleventickets.com",
      "d3h561ztrozjiy.cloudfront.net",
      "flamengoingressos.s3.sa-east-1.amazonaws.com",
    ],
    // remotePatterns: [
    //   { hostname: "s3.amazonaws.com" },
    //   { hostname: "eleventickets.com" },
    // ],
  },
};

module.exports = nextConfig;
