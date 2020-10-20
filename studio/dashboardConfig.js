export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f8ef942d8296e26aef959bf',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-4jyahvtf',
                  apiId: 'f283ee03-66e2-4414-8d3c-5e1c715dd1a9'
                },
                {
                  buildHookId: '5f8ef943de235d22160a68ba',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-67oxgwrx',
                  apiId: 'e76cbebc-f13e-4ca9-bc93-53b2cd65123b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Britt-L/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-67oxgwrx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
