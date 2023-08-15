import React from 'react';
import NutDoc from '../../../../assets/images/Company/nutscientist.png';

export default function OurStory() {

  return (
    <div className="bg-[#0EAFA2] grid grid-cols-1 md:grid-cols-2 gap-2 items-start h-full p-4 md:p-40">
      {/* Text Container */}
      <div className="space-y-10 lg:ml-20">
        <h1 className="text-7xl lg:mt-20">Our Story</h1>
        <p className='text-md md:w-3/4 md:text-xl lg:text-2xl lg:w-3/4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* Image Container */}
      <div>
        <img src={NutDoc} alt="Description" className="h-[30em] md:h-[40em] lg:h-[50em] w-full object-cover"/>
      </div>
    </div>
  );
}

