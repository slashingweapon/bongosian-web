import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { OutboundLink } from "gatsby-plugin-google-gtag"
import Markdown from 'react-markdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const BookPage = ({data, children}) => {
  const meta = data.mdx.frontmatter

  const BuyButtons = () => {
    return (
      <span className="buylinks">
        { meta.available && meta.available.map(element => (
          <span key={element.name}>
            <OutboundLink key={element.name} href={element.url} className="buylink">
              {element.name}
            </OutboundLink>
            { element.extra && <span className="buyextra"> ({element.extra})</span> }
            <span>&nbsp;</span>
          </span>
        ))}
      </span>
    )
  }

  return (
    <Layout pageTitle={meta.title}>
      <Row>
        <Col xs="12" sm="6">
          <GatsbyImage 
            image={meta.cover.childImageSharp.gatsbyImageData}
            alt={`Cover: `+ meta.coverDesc }
            width={512}
            className="bookDetailCover"
          />
          <p>
            <strong>Available at: </strong> 
            <BuyButtons/>
          </p>
        </Col>
        <Col xs="12" sm="6">
          <Markdown>{meta.synopsis}</Markdown>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <details>
            <summary>Book Details</summary>
            <table className="bookdata"><tbody>
              <tr>
                <th>Release</th>
                <td>{meta.releaseDate}</td>
              </tr>
              <tr>
                <th>Author</th>
                <td>{meta.author}</td>
              </tr>
              <tr>
                <th>Pages</th>
                <td>{meta.pages}</td>
              </tr>
              { meta.isbns && meta.isbns.paperback && 
                <tr>
                  <th>Print ISBN</th>
                  <td>{meta.isbns.paperback}</td>
                </tr>
              }
              { meta.isbns && meta.isbns.ebook !== null && 
                <tr>
                  <th>EBook ISBN</th>
                  <td>{meta.isbns.ebook}</td>
                </tr>
              }
            </tbody></table>
          </details>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <details>
            <summary>Excerpt</summary>
              {children}
              <div><p>
                <strong>Continue reading at: </strong> 
                <BuyButtons/>
              </p></div>            
          </details>
        </Col>
      </Row>

    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      author
      releaseDate(formatString: "MMM DD, YYYY")
      slug
      pages
      cover {
        childImageSharp {
          gatsbyImageData
        }
      }
      square {
        childImageSharp {
          gatsbyImageData
        }
      }
      coverDesc
      subtitle
      title
      isbns { ebook paperback }
      available { url name extra }
      synopsis
    }
    id
    body
  }
}
`

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title} />

export default BookPage
