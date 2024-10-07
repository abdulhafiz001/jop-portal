import React from 'react'
import HeaderComp from './Header.Comp'
import FooterComp from './Footer.Comp'

const Template =(props)=> {
  return (
    <div>
      <HeaderComp page={"appliedJob"} />


{/* //children */}
{props.children}

      <FooterComp />
    </div>
  )
}

export default Template