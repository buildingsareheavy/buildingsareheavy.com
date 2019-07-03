// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const portfolioItems = require('./src/data/portfolio.json');

module.exports = function(api) {
  api.loadSource(store => {
    const contentType = store.addContentType({
      typeName: 'PortfolioItems',
    });

    for (const item of portfolioItems) {
      contentType.addNode({
        id: item.id,
        title: item.title,
        description_1: item.description_1,
        description_2: item.description_2,
        url_full: item.url_full,
        url_name: item.url_name,
        image: item.image,
      });
    }
  });
};
