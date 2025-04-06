import React from 'react'
import Highlight from '../components/Highlight'
import Hero from '../components/Hero'
import Deals from '../components/Deals'

function Home() {
  return (
    <div>
      <Highlight/>
      <div className='mx-16'>
        <Hero/>
        <Deals/>

      </div>
    </div>
  )
}

export default Home
