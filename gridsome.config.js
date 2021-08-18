var embedConfig = {
  enabledProviders: ['Youtube', 'Vimeo', 'Gist', 'Codepen', 'JSFiddle', 'Giphy'],
  Youtube: {
    template: './src/embedTemplates/Youtube.hbs'
  },
  Vimeo: {
    template: './src/embedTemplates/Vimeo.hbs'
  },
  Giphy: {
    template: './src/embedTemplates/Giphy.hbs'
  },
  JSFiddle: {
    template: './src/embedTemplates/JSFiddle.hbs',
    secureConnection: true
  },
  Codepen: {
    template: './src/embedTemplates/Codepen.hbs'
  },
  Gist: {
    omitStylesheet: false
  }

};

module.exports = {
  siteName: 'David-Sauvage',
  siteUrl: 'https://david-sauvage.github.io',
  pathPrefix: '/blog',
  permalinks: {
    trailingSlash: false
  },
  icon: {
    favicon: {
      src: './src/favicon.png',
      sizes: [16, 32, 96]
    },
    touchicon: {
      src: './src/favicon.png',
      sizes: [76, 152, 120, 167],
      precomposed: true
    }
  },
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'CustomPage',
        baseDir: './content/pages',
        path: '*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Article',
        baseDir: './content/articles',
        path: '**/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        searchFields: ['title', 'excerpt', 'content'],
        collections: [
          {
            typeName: 'Article',
            indexName: 'Article',
            fields: ['title', 'content', 'path']
          },
        ]
      }
    }
  ],
  templates: {
    Article: [{
      path: '/articles/:title'
    }],
    Tag: [
      {
        path: '/tag/:title',
        component: './src/templates/Tag.vue'
      }
    ],
    CustomPage: [
      {
        path: '/pages/:title',
        component: './src/templates/CustomPage.vue'
      }
    ]
  },
  transformers: {
    remark: {
      plugins: [
        ['@noxify/gridsome-plugin-remark-embed', embedConfig],
        ['gridsome-plugin-remark-prismjs-all', {
          noInlineHighlight: false,
          showLineNumbers: true
        }]
      ]
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@customPageImage', '@/../content/pages');
  }
}
