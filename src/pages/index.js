import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import { OutboundLink } from "gatsby-plugin-google-gtag"

const IndexPage = () => {
  return (
    <Layout pageTitle="Books by CJ Holmes">
      
        <div class="row">
          <div class="col-2">
            <StaticImage 
              src="../books/hungry-new-world/hungry-new-world-square.png" 
              alt="Hungry New World Cover"
              width={600}
            />
          </div>
          <div class="col-2">
            <h2>Hungry New World</h2>
            <p>A former tech worker thought he had made peace with the zombie apocalypse,
              until a horde destroyed his solitary life and sent him on a quest to kill
              them all. His journey will remind him there are still things left to
              live for, and he still has plenty to lose.
            </p>
            <p>Read for free 
              on <OutboundLink href="https://www.royalroad.com/fiction/76242/hungry-new-world">
                Royal Road
              </OutboundLink> until January 2024.
            </p>
          </div>
        </div>

      <hr/>

      <div class="row">
        <div class="col-4">
          <h2>The Tenobre Cycle</h2>
          <h3>An Otherworld Adventure Series</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <StaticImage
            src="../books/iv-outlander/iv-outlander-square.jpg"
            alt="Taylor emerges from the summoning room."
            width={250}
          />
          <StaticImage
            src="../books/iv-mendicant/iv-mendicant-square.jpg"
            alt="Taylor fights for his life against monsters."
            width={250}
          />
          <StaticImage
            src="../books/iv-heretic/iv-heretic-square.png"
            alt="Princess: friend or foe?"
            width={250}
          />
        </div>
        <div class="col-2">
          <p style={{margin: 0}}><strong>Taylor DeLanion is used to being summoned to other worlds.</strong></p>
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
          <p>Read at <OutboundLink href="https://www.amazon.com/dp/B0BSPB38P8"
            alt="Tenobre books at Amazon">Amazon</OutboundLink> or anywhere e-books and paperbacks are
            sold.
          </p>
          <p><em>Volume four is scheduled for release in Winter 2024.</em></p>

        </div>
      </div>

    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage