import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'
import SubscribeForm from "../components/subscribe"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const NewsPage = () => {

  return (
    <Layout pageTitle="Subscribe">
      <Row>
        <Col xs="12">
          <p>Join our mailing list for events, announcements, and my Twitch schedule. 
            This is a very low-volume list, typically one email per month. We never 
            share your email address with anyone.</p>
        </Col>
      </Row>
      <Row>
        <SubscribeForm/>
      </Row>
    </Layout>
  )
}

export const Head = () => <Seo title="Announcements" />

export default NewsPage;