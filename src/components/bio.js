import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
    <Row>
      <Col xs="12" sm="3">
        <GatsbyImage image={oneImage.childImageSharp.gatsbyImageData} alt={alt} />
      </Col>
      <Col xs="12" sm="7">
        {children}
      </Col>
    </Row>
  )
}

export default Bio
