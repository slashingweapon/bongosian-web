import * as React from 'react'

const Term = ({ dterm, children }) => {
  return (
    <>
        <dt>{dterm}</dt>
        <dd>{children}</dd>
    </>
    )
}

export default Term
