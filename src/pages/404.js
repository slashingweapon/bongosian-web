import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {

  return (
    <Layout pageTitle="File Not Found">
      The file you were looking for isn't here.
    </Layout>
  )
}

export const Head = () => <Seo title="404" />

export default AboutPage