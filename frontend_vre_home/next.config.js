/** @type {import('next').NextConfig} */
const path = require('path');
module.exports = {
  reactStrictMode: true,
  basePath: '/vre',
  assetPrefix: '/vre/',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
