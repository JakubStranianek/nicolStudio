import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Reviews from "../components/Reviews"
import {StaticImage, GatsbyImage, getImage} from "gatsby-plugin-image"

const ServicesDetails = ({data}) => {
  const markDown = data.markdown
  const image = getImage(data.markdownRemark.frontmatter.mainImage)

  return (
    <Layout>
      <Reviews />
    </Layout>
    )
}

export const Head = () => <Seo title="Using DSG" />

export default ServicesDetails

export const pageQuery = graphql`
  query MyQuery($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      mainImage {
        childImageSharp {
          gatsbyImageData (
            width: 1920
            height: 600
            quality: 100
            formats: WEBP
          )          
        }
      }
    }
  }
}
`