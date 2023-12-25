import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'

const NewsThanks = () => {

  return (
    <Layout pageTitle="Form Received">
      <p>Thank you. If you have unsubscribed, then you will receive no further emails from our newsletter.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Thank You" />

export default NewsThanks;