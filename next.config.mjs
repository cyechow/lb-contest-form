// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

export default {
  webpack(config, { isServer }) {
    // Add custom webpack config here
    // Example: Add rules for handling favicon
    if (!isServer) {
      config.module.rules.push({
        test: /\.(ico|svg|jpg|jpeg|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/_next/static/images/',
              outputPath: 'static/images/',
              esModule: false,
            },
          },
        ],
      });
    }

    return config;
  },
};
