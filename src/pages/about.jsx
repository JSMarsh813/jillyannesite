import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GeneralHeader from "../components/GeneralHeader"

export default function About() {
  return (
    <Layout>
      <GeneralHeader text="About Me" />
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />
