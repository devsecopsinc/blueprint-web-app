/**
 * @type {import('next').NextConfig}
 */
const withGraphql = require('next-plugin-graphql');

const nextConfig = {
  /* config options here */
}

module.exports = withGraphql({
  webpack(config, options) {
    return config;
  }
})

module.exports = withGraphql(nextConfig)
