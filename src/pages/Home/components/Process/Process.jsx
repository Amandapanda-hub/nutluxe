import React from 'react';

import image1 from '../../../../assets/images/Process/alienshipseed.png';
import image2 from '../../../../assets/images/Process/robotnutfarmers.png';
import image3 from '../../../../assets/images/Process/nutqualitycontrol.png';

export default function Process() {
  const boxes = [
    { img: image1, title: 'Exploration & Discovery', desc: 'Our state-of-the-art galactic vessels scour the cosmos, discovering planets rich in nut resources. Equipped with advanced sensors, they detect and analyze potential harvest locations, ensuring we select only the finest cosmic nuts for our collection.' },
    { img: image2, title: 'Robotic Harvesting', desc: 'To protect and preserve delicate alien ecosystems, we deploy specialized robots for the harvesting process. Each robot is tailor-made to navigate its assigned planets unique terrain and atmosphere. With precision and care, they gently gather each nut, ensuring the utmost quality.' },
    { img: image3, title: 'Quality & Collaboration', desc: 'Every nut undergoes a meticulous inspection process in collaboration with our intergalactic partners. Alien nut experts work alongside our human team, blending millennia of knowledge to ensure that the nuts not only taste out-of-this-world but also meet the highest quality standards.' },
  ];

  return (
    <div className='bg-[#00D9C8] py-40 px-10 bottom-box'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {boxes.map((box, index) => (
          <div key={index} className="flex flex-col h-full box rounded overflow-hidden">
            <img src={box.img} alt={box.title} className="flex-grow w-full object-cover block"/>
            <div className="bg-black text-white p-4">
              <h2 className="text-center text-2xl font-extrabold tracking-wider mb-2">{box.title}</h2>
              <div className="flex justify-center">
                <p className="text-center text-md leading-8 w-3/4">{box.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
);
}
