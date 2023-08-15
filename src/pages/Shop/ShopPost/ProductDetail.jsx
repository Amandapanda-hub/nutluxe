import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { slugify } from '../../../utilities/utils';
import products from '../../../assets/data/Products';

const ProductDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { productSlug } = useParams();
    const product = products.find(p => slugify(p.title) === productSlug);
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <div className='flex flex-col md:flex-row px-20 py-[10em] space-x-10'>
            <div className='w-full md:w-1/2 mb-4 md:mb-0'>
                <img src={product.img} alt={product.title} className='w-full h-[80vh] object-cover mb-4 rounded' />
            </div>

            <div className='w-full md:w-1/2 md:pl-6 py-20 space-y-6'>
                <h2 className='text-left text-5xl mb-2 font-extrabold'>{product.title}</h2>
                <p className='text-left text-2xl font-extrabold font-chewy mb-2'>{product.price}</p>
                <p className='text-left text-2xl font-thin mb-4'>{product.desc}</p>
                
                <label className='block text-left text-lg mb-2'>Quantity</label>
                
                <div className="border rounded w-[15em]">
                    <input 
                        type="number" 
                        value={quantity} 
                        onChange={e => setQuantity(Math.max(1, parseInt(e.target.value)))} 
                        className='p-6 w-full text-center appearance-none'
                    />
                </div>

                <button className='button-hover-effect hover:text-black bg-black text-white py-5 rounded-full w-full mt-4'>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductDetail;
