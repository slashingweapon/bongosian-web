import * as React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout';
import Seo from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import { OutboundLink } from "gatsby-plugin-google-gtag";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

const IndexPage = () => {
  return (
    <Layout pageTitle="Books by CJ Holmes">
      
        <Row>
          <Col xs="12" md="5">
            <Link to="/books/hungry-new-world/">
              <StaticImage 
                  src="../books/hungry-new-world/hungry-new-world-square.png" 
                  alt="Hungry New World Cover"
                  width={600}
                />
            </Link>
          </Col>
          <Col xs="12" md="7">
            <Link to="/books/hungry-new-world/">
              <h2>Hungry New World</h2>
            </Link>
            <p>A former tech worker thought he had made peace with the zombie apocalypse,
              until a horde destroyed his solitary life and sent him on a quest to kill
              them all. His journey will remind him there are still things left to
              live for, and he still has plenty to lose.
            </p>
            <p>Read for free 
              on <OutboundLink href="https://www.royalroad.com/fiction/76242/hungry-new-world">
                Royal Road
              </OutboundLink> until January 2024.
            </p>
          </Col>
        </Row>

      <hr/>

      <Row>
        <Col>
          <h2>The Tenobre Cycle</h2>
          <p style={{margin: 0}}><strong>Taylor DeLanion is used to being summoned to other worlds.</strong></p>

          <p>As Taylor makes a life for himself in Tenobre and explores the world's secrets,
            he realizes human civilization is threatened. Taylor must abandon his usual 
            restraint and force a cultural change, or else the world's forgotten history will repeat.
          </p>
        </Col>
      </Row>

      <Carousel indicator={false} pause='hover'>
        <Carousel.Item>
          <Row>
            <Col xs="12" md="5">
              <Link to="/books/iv-outlander/">
                  <StaticImage
                    src="../books/iv-outlander/iv-outlander-square.jpg"
                    alt="Taylor emerges from the summoning room."
                  />
              </Link>
            </Col>
            <Col xs="12" md="7">
              <p>Some text about Outlander here.</p>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col xs="12" md="5">
              <StaticImage
                src="../books/iv-mendicant/iv-mendicant-square.jpg"
                alt="Taylor fights for his life against monsters."
                />
            </Col>
            <Col xs="12" md="7">
              <p>Some text about Mendicant here.</p>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>

      <Row>
        <Col>
          <p><em>Volume four will be published in Spring 2024.</em></p>
          <p>Read The Tenobre Cycle at <OutboundLink href="https://www.amazon.com/dp/B0BSPB38P8"
            alt="Tenobre books at Amazon">Amazon</OutboundLink> or anywhere e-books and paperbacks are
            sold.
          </p>
        </Col>
      </Row>

    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage