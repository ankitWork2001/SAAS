import React from 'react'
import Screener from './Screener'
import FindWinning from './FindWinning'
import MultiTime from './MultiTime'
import Quickly from './Quickly'
import FuelTradingPotential from '../ToolKits/FuelTradingPotential'

const Screeners = () => {
  return (
    <div className="overflow-hidden">
     <Screener/>
     <FindWinning/>
     <MultiTime/>
     <Quickly/>
     <FuelTradingPotential/>
     
    </div>
  )
}

export default Screeners