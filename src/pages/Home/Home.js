import React from 'react'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Process from './components/Process/Process'
import OurStory from './components/OurStory/OurStory'

export default function Home() {
  return (
    <div className='font-chewy'>
    <Hero/>
    <Products/>
    <Process/>
    <OurStory/>
    </div>
  )
}
