import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'

const Bio = ({ alt, src, children }) => {
  const images = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        nodes {
          id
          base
          childImageSharp {
            gatsbyImageData(width: 256)
          }
        }
      }
    }
  `)

  let oneImage = images.allFile.nodes.find((oneNode) => oneNode.base === {src}.src)

  return (
    <div class="row">
      <div class="col-1">
        <GatsbyImage image={oneImage.childImageSharp.gatsbyImageData} alt={alt} />
      </div>
      <div class="col-3">
        {children}
      </div>
    </div>
  )
}

export default Bio
