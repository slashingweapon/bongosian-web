import * as React from "react"
import Layout from '../components/layout'
import Bio from '../components/bio'
import Seo from '../components/seo'

const AboutPage = () => {

  return (
    <Layout pageTitle="About Us">

      <Bio alt="Chairman Bongosian" src="Bongo-square.png">
        <p>Mister Bongosian is the best.</p>
      </Bio>

      <Bio alt="CJ Holmes" src="CJ-square.png">
        <p>CJ writes the books.</p>
      </Bio>

    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage