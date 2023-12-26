import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BookPage = () => {
  return (
    <Layout pageTitle="Stuff about a book">
      <p>So much book.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Super Cool Blog Posts" />

export default BookPage
