import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Bongosian Press">
      <div style={{display: "flex"}}>
        <div>
          <StaticImage 
            src="../books/hungry-new-world/hungry-new-world-cover.png" 
            alt="Hungry New World Cover"
            width={192}
          />
        </div>
        <div style={{"marginLeft":"20px", "marginTop":"0px", "width":"400px"}}>
          <h2 style={{"marginTop":"0px"}}>Hungry New World</h2>
          <h3>The newest volume from CJ Holmes.</h3>
          <p>A former tech worker thought he had made peace with the zombie apocalypse,
            until a horde destroys his solitary life and sends him on a quest to destroy
            them all. His journey will remind him there are still things left to
            live for, and still plenty to lose.
          </p>
          <p>Read for free 
            on <a href="https://www.royalroad.com/fiction/76242/hungry-new-world">Royal Road</a> until January 2024.
          </p>
        </div>
      </div>

      <hr/>

      <div>
        <h2>The Tenobre Cycle</h2>
        <h3>An Otherworld Adventure Series</h3>
        <div style={{display:"flex"}}>
          <div style={{width:200}}>
            <StaticImage
              src="../books/iv-outlander/iv-outlander-cover.png"
              alt="Taylor emerges from the summoning room."
              width={128}
            />
          </div>
          <div style={{width:200}}>
            <StaticImage
              src="../books/iv-mendicant/iv-mendicant-cover.jpg"
              alt="Taylor fights for his life against monsters."
              width={128}
            />
          </div>
          <div style={{width:200}}>
            <StaticImage
              src="../books/iv-heretic/iv-heretic-cover.png"
              alt="Princess: friend or foe?"
              width={128}
            />
          </div>
        </div>

        <p><strong>Taylor DeLanion is used to being summoned to other worlds.</strong></p>
        <p>Tenobre is his eleventh, a backward civilization stuck in the bronze age. As 
          Taylor reluctantly makes a life for himself in this new world, the oddities begin 
          to add up. There is only one language, one religion, one system of magic 
          controlled by the church, and very little history.
        </p>
        <p>The world is changing, yet nobody seems to notice. As Taylor discovers more of the 
          world's secrets he has to abandon his usual restraint and force civilization to 
          change, to prevent the world's forgotten history from repeating. Everyone's lives 
          depends on it.
        </p>
        <p>Read at <a href="https://www.amazon.com/dp/B0BSPB38P8"
          alt="Tenobre books at Amazon">Amazon</a> or anywhere e-books and paperbacks are
          sold.
        </p>
        <p><em>Volume four is scheduled for Spring 2024.</em></p>

      </div>

    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage