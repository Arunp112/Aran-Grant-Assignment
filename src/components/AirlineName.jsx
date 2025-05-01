import React from 'react';
import { Emirate, JapanAirline, SingaporeAirline, Iberia, Swiss, Qatar } from '../assets/logo';

const AirlineName = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-12">
        {[SingaporeAirline, Swiss, Emirate, Qatar, JapanAirline, Iberia].map((LogoComponent, idx) => (
          <div key={idx} className="w-20 md:w-24 hover:scale-110 transition-transform duration-300">
            <LogoComponent className="w-full h-auto fill-current text-white" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirlineName;
