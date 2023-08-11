import React from 'react';
import image1 from '../../../../assets/images/Products/nutdisplay1.png'
import image2 from '../../../../assets/images/Products/nutdisplay2.png'
import image3 from '../../../../assets/images/Products/nutdisplay3.png'
import image4 from '../../../../assets/images/Products/nutdisplay4.png'
import image5 from '../../../../assets/images/Products/nutdisplay5.png'
import image6 from '../../../../assets/images/Products/nutdisplay6.png'


export default function Products() {
  const products = [
    { img: image1, title: 'Product 1', desc: 'Description 1', link: '/product1' },
    { img: image2, title: 'Product 2', desc: 'Description 2', link: '/product2' },
    { img: image3, title: 'Product 2', desc: 'Description 2', link: '/product2' },
    { img: image4, title: 'Product 2', desc: 'Description 2', link: '/product2' },
    { img: image5, title: 'Product 2', desc: 'Description 2', link: '/product2' },
    { img: image6, title: 'Product 2', desc: 'Description 2', link: '/product2' },
  ];

  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-20'>
      {products.map((product, index) => (
        <a 
           key={index} 
           href={product.link} 
           className=' p-4 rounded transition-transform duration-200 transform hover:-translate-y-2'
        >
          <img src={product.img} alt={product.title} className='w-full h-[50vh] object-cover mb-4 rounded'/>
          <h2 className='text-left text-lg mb-2 font-extrabold'>{product.title}</h2>
          <p className='text-left text-md'>{product.desc}</p>
        </a>
      ))}
    </div>
  );
}
