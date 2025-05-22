import React from 'react';
import { Outlet } from 'react-router-dom';

import Elevate from '../../components/Home/Elevate';
import Tradingsimple from '../../components/Home/Tradingsimple';
import Pro from '../../components/Home/Pro';
import Screener from '../../components/Home/Screener';
import Next from '../../components/Home/Next';
import RealTrader from '../../components/Home/RealTrader';
import Frequent from '../../components/Home/Frequent';
import Plans from '../../components/Pricing/Plans';
import Safe from '../../components/Pricing/Safe';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Elevate />
      <Tradingsimple />
      <Pro />
      <Screener />
      <Next />
      <RealTrader />
      <Plans/>
      <Safe/>
      <Frequent />

      {/* For nested routing if needed */}
      <Outlet />
    </div>
  );
};

export default Home;
