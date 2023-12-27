import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { OutboundLink } from "gatsby-plugin-google-gtag"
import Markdown from 'react-markdown'


const BookPage = ({data, children}) => {
  const meta = data.mdx.frontmatter
  return (
    <Layout pageTitle={meta.title}>
      <div class="row">
        <div class="col-2">
          <GatsbyImage 
            image={meta.cover.childImageSharp.gatsbyImageData}
            alt={`Cover: `+ meta.coverDesc }
            width={512}
          />
          <p>
            { data.mdx.frontmatter.available.map(element => (
              <>
                <OutboundLink href={element.url} class="sitenav-link">
                  {element.name}
                </OutboundLink>
                { console.log(element) }
                { element.extra && <span>({element.extra})</span> }
                <span>&nbsp;</span>
              </>
            ))}
          </p>
        </div>
        <div class="col-2">
          <Markdown>{meta.synopsis}</Markdown>
        </div>
      </div>
      <div class="row">
        <div class="accordion-head"><h2>Book Details</h2></div>
        <div class="accordion-body">
          <table class="bookdata">
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
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          {children}
        </div>
      </div>
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
