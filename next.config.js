const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = {
  target: 'serverless',
  future: { webpack5: true },
};

module.exports = withPlugins([optimizedImages], nextConfiguration);
