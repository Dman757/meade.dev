const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  images: {
    domains: ['preston6.shithouse.tv'],
  },
});
