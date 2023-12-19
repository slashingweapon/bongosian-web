import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'

const Bio = ({ alt, src, children }) => {
  const images = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        nodes {
          id
          base
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

/*  let oneImage = images.allFile.nodes.find(imatchit); */
  let oneImage = images.allFile.nodes.find((oneNode) => oneNode.base === {src}.src)


  return (
    <div>
      <p>Show image for {src} here. With alt, plus width=256</p>
      <GatsbyImage image={oneImage.childImageSharp.gatsbyImageData} alt={alt} width="256" />
      {children}
    </div>
  )
}

export default Bio
