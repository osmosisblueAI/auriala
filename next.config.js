/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/auriala' : '',
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
};
module.exports = nextConfig;
