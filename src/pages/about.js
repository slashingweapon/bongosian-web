import * as React from "react"
import Layout from '../components/layout'
import Bio from '../components/bio'
import Seo from '../components/seo'

const AboutPage = () => {

  return (
    <Layout pageTitle="About Us">

      <Bio alt="Chairman Bongosian" src="Bongo-square.png">
        <h2>Bongo the Bongosian, Chairman</h2>
        <p>Chairman Bongo has a destiny: to shred. Paper shopping bags, pizza boxes, 
          tennis balls, fragments of the back deck, rocks.  It’s all good to chew, but 
          he reserves a special place in his heart for manuscripts.  All those 
          misspellings and repeated words and clunky phrases need to be shredded into 
          tiny pieces.  The tiny pieces must be gnawed and scattered so they can ascend 
          to prose heaven.  The chairman eagerly awaits his human’s next efforts, because 
          he needs to shred!
        </p>
      </Bio>

      <Bio alt="CJ Holmes" src="CJ-square.png">
        <h2>CJ Holmes, Author</h2>
        <p>He didn’t mean to write an isekai novel, it just sort of happened.  Maybe it 
          was the decades of weekly D&D sessions.  Maybe all those light novels he was 
          reading had wormed their way into his brain.  Or maybe he wanted to do something 
          besides sling computer code all day.  Whatever the reason, one day he sat down 
          and started writing.  The more he wrote, and rewrote, the happier the dog was.  
          Everybody was winning!  Then one day he realized he had a book, but he wasn’t 
          ready to stop writing.  So he started another one…
        </p>
      </Bio>

    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage