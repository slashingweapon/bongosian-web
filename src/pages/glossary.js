import * as React from "react"
import Layout from '../components/layout'
import Term from '../components/term'

const Glossary = ({ alt, src, children }) => {
    return (
        <Layout>
            <dl>
                <Term dterm={'alignment, treaty of'}>An international treaty brokered by the Unity Church. It establishes a unified language, currency, and religion. It also forbids international conquest, slavery, and other highly destructive behaviors.</Term>
                <Term dterm={'appalon'}>A dromedary riding animal used extensively in Tenobre. They are sturdy, intelligent, and excellent plodders.</Term>
                <Term dterm={'council of guardians'}>The council of senior priests who oversee the administrative duties of the church. In theory they report to the hierarch, but in practice they wield considerable independent power.</Term>
                <Term dterm={'franango'}>A large, predatory, ground-dwelling bird that lives in groups called raids.</Term>
                <Term dterm={'glebe'}>Properties set aside by a nation for use by the church, either as a grounds for a temple or to generate income to support the local church.</Term>
                <Term dterm={'gurantor'}>A long-haired draft animal of elephantine proportions, with six legs, a trunk, and horns. They are often used to pull sets of cars or wagons hitched together to form trains.</Term>
                <Term dterm={'hierarch'}>The head of the Unity Religion.</Term>
                <Term dterm={'matrix (f) / patrix (m)'}>The lead priest of a temple or shrine. In rural areas, they might be the only priest in the temple.</Term>
                <Term dterm={'mendicant'}>A traveling healer or disciple who is self-directed, lacking explicit assignment from the church. They live entirely by the donations they receive.</Term>
                <Term dterm={'origin'}>An item that defines and embodies a system of magic. A grimoire.</Term>
                <Term dterm={'practitioner'}>One who uses the Spiritual Arts. More broadly, anyone who uses magic.</Term>
                <Term dterm={'prelate'}>The highest priest within a country or other large territory. They answer directly to the Council of Guardiands.</Term>
            </dl>
        </Layout>
    )
  }
  
  export default Glossary
  