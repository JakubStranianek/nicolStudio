/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
const path = require('path')
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query MyQuery {
  allMarkdownRemark {
    nodes {
      frontmatter {
        slug
        stack
        title
      }
    }
  }
}
  `)
  
   data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: `/${node.frontmatter.slug}`,
      component: require.resolve('./src/templates/services-details.js'),
      context: { slug: node.frontmatter.slug },
    })
  })
}
