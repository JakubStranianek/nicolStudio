import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


function Header ({ siteTitle, data }) {
  return (
    <header className="h-screen bg-black">
      <StaticImage src="../images/mainPhoto.jpg" alt="NicolStudioHeaderBG" className="w-full h-full opacity-60"/>
   </header>
    )
}

export default Header