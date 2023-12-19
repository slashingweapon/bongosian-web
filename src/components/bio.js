import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import {
  bioFrame, 
  bioImageFrame, 
  bioTextFrame
} from './bio.module.css'

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
    <div className={bioFrame}>
      <div className={bioImageFrame}>
        <GatsbyImage image={oneImage.childImageSharp.gatsbyImageData} alt={alt} />
      </div>
      <div className={bioTextFrame}>
        {children}
      </div>
    </div>
  )
}

export default Bio
