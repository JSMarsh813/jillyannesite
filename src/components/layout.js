/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import NavBar from "./NavBar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
