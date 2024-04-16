/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://reveinoff.com",
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  sitemapSize: 7000,
};
