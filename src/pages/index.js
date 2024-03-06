import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout';
import Seo from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import { OutboundLink } from "gatsby-plugin-google-gtag";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

const IndexPage = () => {
  const tenobreBooks = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {frontmatter: {series: {eq: "tenobre"}}}
        sort: {frontmatter: {seriesOrder: ASC}}
      ) {
        nodes {
          id
          frontmatter {
            title
            seriesOrder
            logline
            slug
            available {
              extra
              name
              url
            }
            coverDesc
            square {
              childrenImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

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
            <p>A former tech worker thinks he's made peace with the zombie apocalypse,
              until a horde destroys his solitary life and sends him on a quest to kill
              them all. His journey will remind him there are still things left to
              live for, and he still has plenty to lose.
            </p>

            <p><strong>Release date:</strong> March 20, 2024 in paperback and ebook!</p>

            <p>Pre-order now from <OutboundLink href="https://www.amazon.com/dp/B0CWZRHG7G" className="buylink">
                Amazon
              </OutboundLink>.
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

      <Carousel indicators={false} pause='hover'>
        {tenobreBooks.allMdx.nodes.map(book => (
            <Carousel.Item key={book.id}>
              <Row>
                <Col xs="12" md="5">
                  <Link to={"/books/".concat(book.frontmatter.slug,"/")}>
                    <GatsbyImage image={book.frontmatter.square.childrenImageSharp[0].gatsbyImageData} 
                      alt={book.frontmatter.coverDesc} />
                  </Link>
                </Col>
                <Col xs="12" md="5">
                  <Link to={"/books/".concat(book.frontmatter.slug,"/")} className="bookTitleLink">
                    <h2>{book.frontmatter.title}</h2>
                  </Link>
                  <p>{book.frontmatter.logline}</p>
                  <p className="buylinks">
                    {book.frontmatter.available.map(link => (
                      <span key={book.frontmatter.slug.concat("_link_", link.name)}>
                        <OutboundLink href={link.url} className="buylink">
                          {link.name}
                        </OutboundLink>
                        &nbsp;
                      </span>
                    ))}
                  </p>
                </Col>
              </Row>
            </Carousel.Item>
          ))
        }
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