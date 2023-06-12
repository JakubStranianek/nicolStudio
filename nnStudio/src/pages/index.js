import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import Contact from "../components/Contact"
import About from "../components/About"
import Reviews from "../components/Reviews"
import Services from "../components/Services"

import { useStaticQuery, graphql } from "gatsby"
const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <About />
      <Services />
      <Reviews />
      <Contact />
    </Layout>
    )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
