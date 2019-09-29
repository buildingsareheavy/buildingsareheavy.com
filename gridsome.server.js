// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};

// Currently I switched to markdown files.
// Also the image paths couldn't be found when calling the JSON file.
// I tried :src="require(`../path/to/image/${portfolio.node.image}`)" but still nothing.

// const portfolioItems = require('./portfolio/data/portfolio.json');

// module.exports = function (api) {
//   api.loadSource(actions => {
//     const collection = actions.addCollection('PortfolioItems');
//     for (const item of portfolioItems) {
//       collection.addNode({
//         id: item.id,
//         title: item.title,
//         image: item.image,
//         link_name: item.link_name,
//         link_url: item.link_url,
//       });
//     }
//   });
// };
