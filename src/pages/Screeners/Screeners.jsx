import React from 'react'
import Screener from './screener'
import FindWinning from './FindWinning'
import MultiTime from './MultiTime'
import Quickly from './Quickly'
import FuelTradingPotential from '../ToolKits/FuelTradingPotential'
import Fuel from '../ToolKits/Fuel'

const Screeners = () => {
  return (
    <div>
     <Screener/>
     <FindWinning/>
     <MultiTime/>
     <Quickly/>
     <FuelTradingPotential/>
     <Fuel/>
    </div>
  )
}

export default Screeners