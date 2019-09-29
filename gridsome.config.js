// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Photography',
        baseDir: './photography',
        pathPrefix: '/',
        template: './src/templates/PhotographyPost.vue',
        refs: {
          tags: {
            typeName: 'PhotographyTag',
            create: true,
          },
        },
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Writing',
        baseDir: './writing',
        pathPrefix: '/',
        template: './src/templates/WritingPost.vue',
        refs: {
          tags: {
            typeName: 'WritingTag',
            create: true,
          },
        },
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Portfolio',
        baseDir: './portfolio',
        pathPrefix: '/',
      },
    },
    // configure Netlify CMS
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        modulePath: `src/admin/index.js`,
      },
    },
    // fix paths
    {
      use: 'gridsome-plugin-netlify-cms-paths',
      options: {
        contentTypes: ['Photography'], // Same as declared above
        coverField: 'cover_image', // Global definition
      },
    },
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    },
  },
};
