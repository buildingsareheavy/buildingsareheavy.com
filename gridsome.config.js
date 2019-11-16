const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/scss/index.scss")]
    });
}

module.exports = {
  siteName: "Buildings Are Heavy",
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  },
  plugins: [
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Photography",
        baseDir: "./photography",
        pathPrefix: "/",
        template: "./src/templates/PhotographyPost.vue",
        refs: {
          tags: {
            typeName: "PhotographyTag",
            create: true
          }
        }
      }
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Writing",
        baseDir: "./writing",
        pathPrefix: "/",
        template: "./src/templates/WritingPost.vue",
        refs: {
          tags: {
            typeName: "WritingTag",
            create: true
          }
        }
      }
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Portfolio",
        baseDir: "./portfolio",
        pathPrefix: "/"
      }
    },
    // configure Netlify CMS
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        modulePath: `src/admin/index.js`
      }
    },
    // fix paths
    // {
    //   use: 'gridsome-plugin-netlify-cms-paths',
    //   options: {
    //     contentTypes: ['Portfolio'], // Same as declared above
    //     coverField: 'image', // Global definition
    //   },
    // },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-152620234-1"
      }
    }
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link"
    }
  }
};
