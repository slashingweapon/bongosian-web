import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'
import SubscribeForm from "../components/subscribe"
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/col'

const NewsPage = () => {

  return (
    <Layout pageTitle="Subscribe">
      <Row>
        <Col xs="12">
          <p>Join our mailing list for events, announcements, and Twitch schedules. 
            This is a very low-volume list, typically one email per month.</p>
        </Col>
        <Col xs="12">
          <SubscribeForm/>
        </Col>
      </Row>
    </Layout>
  )
}

export const Head = () => <Seo title="Announcements" />

export default NewsPage;