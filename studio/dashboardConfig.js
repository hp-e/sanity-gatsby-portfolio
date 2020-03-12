export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e6a220176dd814e036ee41e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qh4m15d5',
                  apiId: 'c4db48ff-a8a6-40d3-b43a-c659bfc5a1a2'
                },
                {
                  buildHookId: '5e6a22022250d28653e8db2b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-g4nsmnry',
                  apiId: '173edeba-d9b3-4f5d-9ed7-3f0349f1948d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hp-e/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-g4nsmnry.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
