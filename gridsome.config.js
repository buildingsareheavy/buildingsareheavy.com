// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Buildings Are Heavy",
  siteDescription:
    "A blog about photography, web design & development.",

  plugins: [
    {
      // Create posts from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "content/posts/*.md",
        route: "/:slug",
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            route: "/tag/:id",
            create: true
          }
        }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
