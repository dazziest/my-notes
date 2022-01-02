const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})

/** @type {import('next').NextConfig} */
module.exports = withNextra({
  basePath: '/my-notes',
  // i18n: {
  //   locales: ['en', 'id'],
  //   defaultLocale: 'en'
  // }
  experimental: {
    optimizeCss: true,
  },
})
