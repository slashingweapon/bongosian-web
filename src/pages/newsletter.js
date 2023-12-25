import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'
import NewsletterForm from "../components/subscribe"

const NewsletterPage = () => {

  return (
    <Layout pageTitle="Subscribe">
      <p>Join our mailing list for events, announcements, and Twitch schedules. 
        This is a very low-volume list, usually just one email per month.</p>
      <row>
        <div class="col-1"/>
        <div class="col-2">
          <NewsletterForm/>
        </div>
      </row>
    </Layout>
  )
}

export const Head = () => <Seo title="Announcements" />

export default NewsletterPage;