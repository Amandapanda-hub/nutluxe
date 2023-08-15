import React from 'react';
import NutHero from '../../../../assets/images/Heros/nutgalaxy2.png'; 

export default function Hero() {
  return (
    <>
      <div 
        className="top-box relative h-[80vh] bg-center z-10 flex items-center justify-center" 
        style={{ backgroundImage: `url(${NutHero})` }}
      >
        <div className="w-1/2 bg-opacity-50 p-4 rounded-md"> 
          <h1 className="text-white font-bold text-center tracking-widest text-4xl md:text-5xl lg:text-6xl xl:text-7xl" style={{ WebkitTextStroke: '0.5px black' }}>
            Nuts From Every Planet
          </h1>
        </div>
      </div>
    </>
  );
}
