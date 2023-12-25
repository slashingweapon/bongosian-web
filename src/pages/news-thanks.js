import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'
import NewsletterForm from "../components/subscribe"

const NewsThanks = () => {

  return (
    <Layout pageTitle="Subscribe">
      <p>Thank you. If you have unsubscribed, then you will receive no further emails from our newsletter.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Thank You" />

export default NewsThanks;