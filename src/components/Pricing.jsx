import React from 'react'
import Plans from './Pricing/Plans'
import Safe from "./Pricing/Safe"
import Questions from "./Pricing/Question"
import Pricing1 from "./Pricing/Pricing1"
import FaqSection from './Pricing/Question'

const Pricing = () => {
  return (
    <div className="overflow-hidden">
      <Pricing1/>
      <Plans/>
      <Safe/>
      <FaqSection/>
    </div>
  )
}

export default Pricing
