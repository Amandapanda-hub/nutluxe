import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../../../utilities/utils';
import products from '../../../../assets/data/Products';  

export default function Products() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); // simulate a 1 second loading
  }, []);


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-20'>
    {loading ? (
      // Display skeleton loaders for each product
      Array.from({ length: products.length }).map((_, index) => (
        <div key={index} className='p-4 rounded bg-gray-300 animate-pulse skeleton h-[50vh]'></div>
      ))
    ) : (
      products.map((product, index) => (
        <Link 
          key={index} 
          to={`/product-detail/${slugify(product.title)}`}
          className='block p-4 rounded transition-transform duration-200 transform hover:-translate-y-2 fade-in'
        >
          <img src={product.img} alt={product.title} className='w-full h-[50vh] object-cover mb-4 rounded'/>
          <h2 className='text-left text-2xl mb-2 font-extrabold'>{product.title}</h2>
        </Link>
      ))
    )}
  </div>
  );
}