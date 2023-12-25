import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'
import SubscribeForm from "../components/subscribe"

const NewsPage = () => {

  return (
    <Layout pageTitle="Subscribe">
      <p>Join our mailing list for events, announcements, and Twitch schedules. 
        This is a very low-volume list, usually just one email per month.</p>
      <row>
        <div class="col-4">
          <SubscribeForm/>
        </div>
      </row>
    </Layout>
  )
}

export const Head = () => <Seo title="Announcements" />

export default NewsPage;