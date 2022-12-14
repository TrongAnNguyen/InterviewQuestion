/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "raw-loader",
        },
      ],
    });

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
};
