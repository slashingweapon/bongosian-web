import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { OutboundLink } from "gatsby-plugin-google-gtag"
import Markdown from 'react-markdown'


const BookPage = ({data, children}) => {
  const meta = data.mdx.frontmatter

  const doAccordion = (event) => {
    const myself = event.target;
    const panel = document.getElementById(myself.getAttribute("aria-controls"));
    if(panel) {
      myself.classList.toggle("closed");
      if(myself.classList.contains("closed")) {
        panel.classList.add("closed");
        myself.setAttribute("aria-expanded", "false");
      } else {
        panel.classList.remove("closed");
        myself.setAttribute("aria-expanded", "true");
      }
    }
  }

  const BuyButtons = () => {
    return (
      <span class="buylinks">
        { meta.available && meta.available.map(element => (
          <>
            <OutboundLink href={element.url}>
              {element.name}
            </OutboundLink>
            { element.extra && <span class="buyextra">({element.extra})</span> }
            <span>&nbsp;</span>
          </>
        ))}
      </span>
    )
  }

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
            <strong>Available at: </strong> 
            <BuyButtons/>
          </p>
        </div>
        <div class="col-2">
          <Markdown>{meta.synopsis}</Markdown>
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <h2 class="accordion-handle closed"
            aria-expanded="false"
            aria-controls="datazone"
            onClick={doAccordion}
            id="datacontrol"
          >
              Book Details
          </h2>
          <div class="accordion-body closed" 
            id="datazone" 
            aria-labelledby="datacontrol"
          >
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
      </div>

      <div class="row">
        <div class="col-4">
          <h2 class="accordion-handle closed"
            aria-expanded="false"
            aria-controls="excerptzone"
            onClick={doAccordion}
            id="excerptcontrol"
          >
              Excerpt
          </h2>
          <div class="accordion-body closed"
            id="excerptzone"
            aria-labelledby="excerptcontrol"
          >
            {children}
            <div><p>
              <strong>Continue reading at: </strong> 
              <BuyButtons/>
            </p></div>
          </div>
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
