import * as React from 'react'
import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BookPage = ({data, children}) => {

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div class="row">
        <div class="col-2">
          <GatsbyImage 
            image={data.mdx.frontmatter.cover.childImageSharp.gatsbyImageData}
            alt='Cover for ${data.mdx.frontmatter.cover}'
          />
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
      subtitle
      title
      isbns { ebook paperback }
    }
    id
    body
  }
}
`

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title} />

export default BookPage
