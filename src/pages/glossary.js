import * as React from "react"
import Layout from '../components/layout'
import Term from '../components/term'

const Glossary = ({ alt, src, children }) => {
    return (
        <Layout>
            <h1>Glossary</h1>
            <p>
                These are common terms in Tenobre, the fictional world of the <em>Isekai Veteran</em> stories. Email suggested additions or corrections to CJ Holmes &lt;<a href="mailto:cj@bongosian.com">cj@bongosian.com</a>&gt;.
            </p>
            <hr/>
            <dl>
                <Term dterm={'alignment, treaty of'}>An international treaty brokered by the Unity Church. It establishes a unified language, currency, and religion. It also forbids international conquest, slavery, and other highly destructive behaviors.</Term>

                <Term dterm={'appalon'}>A dromedary riding animal used extensively in Tenobre. They are sturdy, intelligent, and excellent plodders.</Term>
                
                <Term dterm={'chosen'}>Also known by his proper name, Numan Battani, he founded the Unity religion, created its first origin, wrote the <em>Book Of Prayers</em>, founded First Enclave, and trained the first generaation of disciples. He is widely credited with resucing humankind from extinction.</Term>

                <Term dterm={'council of guardians'}>The council of senior priests who oversee the administrative duties of the church. In theory they report to the hierarch, but in practice they wield considerable independent power.</Term>
                
                <Term dterm={'dean'}>Leaders of Enclave practitioners, and managers of the School of Spriritual Arts. They set the curriculm and approve promotions from candiate to apprentice, and apprentice to healer/disciple.</Term>
                
                <Term dterm={'enclave'}>Generally, the seat of the Unity religion where priests and practitioners are educated, and church matters are organized. First Enclave was on Mt. Yagour, and was intentionally destroyed by the Chosen when he felt its purpose had been achieved. Second Enclave was established in Unity City by Saint Bahram, and has stood for 250 years. Nexus will become the Third Enclave, if it survives.</Term>

                <Term dterm={'franango'}>A large, predatory, ground-dwelling bird that lives in groups called raids.</Term>
                
                <Term dterm={'glebe'}>Properties set aside by a nation for use by the church, either as a grounds for a temple or to generate income to support the local clergy.</Term>
                
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
  