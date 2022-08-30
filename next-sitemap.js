module.exports = {
  siteUrl: 'https://pirasanth.com/',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  additionalPaths: async (config) => [
    await config.transform(config, '/blog/how-to-set-up-cucumber-with-cypress'),
    await config.transform(
      config,
      '/blog/websites-to-practice-automation-testing'
    ),
  ],
};
