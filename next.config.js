/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  // 确保CSS模块在生产环境中正确处理
  webpack: (config) => {
    // 修改webpack配置，确保CSS模块正确处理
    const rules = config.module.rules
    .find((rule) => typeof rule.oneOf === 'object')
    .oneOf.filter((rule) => Array.isArray(rule.use) && rule.use.some((use) => use.loader && use.loader.includes('css-loader')));
    
    if (rules) {
      rules.forEach((rule) => {
        if (rule.use) {
          rule.use.forEach((use) => {
            if (use.loader && use.loader.includes('css-loader') && use.options) {
              use.options.modules = use.options.modules || {};
              use.options.modules.exportLocalsConvention = 'camelCase';
            }
          });
        }
      });
    }
    
    return config;
  },
  // 确保静态资源正确处理
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : undefined,
}

module.exports = nextConfig
