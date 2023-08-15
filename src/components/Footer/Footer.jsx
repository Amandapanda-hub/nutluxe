import React from 'react';
import { SiFacebook, SiTumblr } from 'react-icons/si';


export default function Footer() {
    return (
        <div className='bg-[#0EAFA2] p-20 grid md:grid-cols-1 lg:grid-cols-2 gap-4 font-chewy'>
    <div className=' p-4 space-y-5 text-center pb-10 lg:pb-20'>
        <h2 className='text-4xl capitalize'>Stay in the loop</h2>
        <p className='pb-20'>Get updates on new releases.</p>
        <input 
    className='py-4 px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000000]' 
    placeholder='Your Email'
            type='email'
        />
    <button className='button-hover-effect ml-10 px-16 py-4 text-white rounded-full hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000000]'>
            Sign Up
        </button>
    </div>
            <div className=' p-4 text-center '>
            <h2>Shipping & Returns</h2>
            <h2>Contact</h2>
            <div className="flex justify-center space-x-4 mt-4 w-full"> 
                <SiFacebook className="h-6 w-6 text-black" />
                <SiTumblr className="h-6 w-6 text-black" />
            </div>
        </div>

        </div>

    );
}
