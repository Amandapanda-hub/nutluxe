import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SiFacebook, SiTumblr } from 'react-icons/si';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

export default function NavBar() {
    const [cartCount] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const location = useLocation();
    const onProductDetailPage = location.pathname.startsWith('/product-detail');

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';  
        } else {
            document.body.style.overflow = 'auto';  
        }

        return () => {
            document.body.style.overflow = 'auto';   
        }
    }, [menuOpen]);


    return (
        <div className="font-chewy absolute top-0 left-0 right-0 h-20 flex items-center justify-between px-8 md:px-10 lg:px-20 bg-cover z-50">
            {/* Mobile menu button + Larger screens icons */}
            <div className="flex space-x-8 z-30">
                {/* Mobile Menu */}
                <div className="md:hidden">
                        {menuOpen ? (
                    <button onClick={() => setMenuOpen(false)}>
                        <FiX className="h-6 w-6 text-black" />
                    </button>
                    ) : (
                    <button onClick={() => setMenuOpen(true)}>
                        <FiMenu className="h-6 w-6 text-white" />
                    </button>
                    )}
                </div>

    
                {/* Icons for larger screens */}
                <div className="hidden md:flex space-x-8 " >
                    <SiFacebook className={`h-6 w-6 ${onProductDetailPage ? 'text-black' : 'text-white'} icon-outline-lg`} />
                    <SiTumblr className={`h-6 w-6 ${onProductDetailPage ? 'text-black' : 'text-white'} icon-outline-lg`} />
                </div>
            </div>
    
            {/* Company name */}
            <Link to="/">
                <h1 className={`text-3xl font-bold tracking-widest z-30 ${menuOpen || onProductDetailPage ? 'text-black' : 'text-white'} lg:text-shadow-default`} 
                style={{ WebkitTextStroke: '1px black' }}>
                    Nutluxe</h1>
            </Link>  
              
            {/* Cart icon */}
            <div className="relative z-30">
                <FiShoppingCart className={`h-6 w-6 ${menuOpen || onProductDetailPage ? 'text-black' : 'text-white'}`} />
                    <span className={`absolute -right-8 top-0 bg-${menuOpen || onProductDetailPage ? 'white' : 'black'} rounded-full text-${menuOpen || onProductDetailPage ? 'black' : 'white'} text-xs px-2 py-0.5`}>
                        {cartCount}
                    </span>
            </div>
    
            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="fixed inset-0 bg-white z-20 flex flex-col justify-between transition-opacity duration-500">
                    {/* This space intentionally left blank to make sure icons at the bottom align well */}
                    <div className="mt-auto"></div>
    
                    {/* Social icons at the bottom */}
                    <div className="flex justify-center space-x-4 mb-6">
                        <SiFacebook className="h-6 w-6 text-black" />
                        <SiTumblr className="h-6 w-6 text-black" />
                    </div>
                </div>
            )}
        </div>
    );
    
};    