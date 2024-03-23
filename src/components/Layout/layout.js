/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Footer from "./footer"
import Header from "./header"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "./seo"

const Layout = ({ children }) => {

  return (
    <div>
      <SEO/>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

