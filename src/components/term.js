import * as React from 'react'

const Term = ({ dterm, children }) => {
  return (
    <>
        <dt className="gTerm">{dterm}</dt>
        <dd>{children}</dd>
    </>
    )
}

export default Term
