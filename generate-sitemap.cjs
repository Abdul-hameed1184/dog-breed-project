const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/available-puppies', changefreq: 'monthly', priority: 0.8 },
  { url: '/future-litter', changefreq: 'monthly', priority: 0.8 },
  { url: '/contacts', changefreq: 'monthly', priority: 0.8 },
  { url: '/puppies-wait-list', changefreq: 'monthly', priority: 0.8 },
  { url: '/stud-services', changefreq: 'monthly', priority: 0.8 },
  { url: '/stud-services/#top', changefreq: 'monthly', priority: 0.8 },
  { url: '/puppy-for-sale', changefreq: 'monthly', priority: 0.8 },
  { url: '/bulldog-for-sale', changefreq: 'monthly', priority: 0.8 },
  { url: '/frenchies-for-sale', changefreq: 'monthly', priority: 0.8 },
];

const sitemap = new SitemapStream({ hostname: 'https://southeastelitefrenchies.com/' });

streamToPromise(sitemap)
  .then((data) => {
    createWriteStream(resolve(__dirname, 'public', 'sitemap.xml')).write(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });

links.forEach((link) => sitemap.write(link));
sitemap.end();