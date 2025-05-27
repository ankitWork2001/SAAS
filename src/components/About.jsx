import React from 'react'
import AboutHero from './About/AboutHero'
import Market from './About/Market'
import Trading from './About/Trading'
import Lux from './About/Lux'

const About = () => {
  return (
    <div className="overflow-hidden">
      <AboutHero/>
      <Market/>
      <Trading/>
      <Lux/>
    </div>
  )
}

export default About
