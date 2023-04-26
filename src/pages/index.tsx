import Head from "components/head"
import Bio from "components/bio"
import * as React from "react"
import { Layout } from "../layout"
import NavBar from "components/nav"
import useSiteMetadata from "hooks/useSiteMetaData"

const IndexPage = () => {
  const { title } = useSiteMetadata()
  return (
    <Layout>
      <NavBar title={title} />
      <Head />
      <Bio />
    </Layout>
  )
}

export default IndexPage
