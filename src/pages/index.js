import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to Bongosian Press">
      <p>I'm making this by following the Gatsby tutorial</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage