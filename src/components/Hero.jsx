import React from 'react'
import { assets } from '../assets/assets'

function Hero() {
    const paragraph = ["Automobiles", "Clothes and wear", "Home interiors", "Computer and tech", "Tools, equipments",
        "Sports and outdoor", "Animal and pets", "Machinery tools", "More category"]

    return (
        <div className='bg-white p-4 my-4  flex gap-4 flex-col md:flex-row rounded-md'>
            {/* Left Section */}
            <div className='flex flex-col text-gray-500 gap-1 text-sm w-full md:w-1/6'>
                {paragraph.map((item, index) => (
                    <div key={index} className='hover:bg-indejo-light p-2 rounded-md cursor-pointer'>
                        <p>{item}</p>
                    </div>
                ))}
            </div>

            {/* Mid Section */}
            <div className='relative w-full md:w-3/5'>
                <img
                    src={assets.maskgroup}
                    alt="Background"
                    className='w-full h-[360px] object-cover '
                />
                <div className='absolute top-16 left-16 text-black'>
                    <p className='text-lg font-semibold'>Latest Trending</p>
                    <h1 className='text-4xl font-bold mt-2'>Electronic Items</h1>
                    <button className='mt-4 px-6 py-2 bg-white text-black rounded-lg hover:bg-blue-100 transition duration-300 font-medium'>
                        Learn More
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div className='w-full md:w-1/5 flex flex-col gap-4 '>
                <div className='bg-gray-100 p-4 rounded-lg'>
                    <div className='flex items-center gap-3 mb-4'>
                        <img src={assets.avatar} alt="avatar" className='w-10 h-10' />
                        <p className='font-medium'>Hi, user<br />let's get started</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <button className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>
                            Join Now
                        </button>
                        <button className='bg-white text-gray-700 py-2 px-4 rounded border hover:bg-gray-50 transition duration-300'>
                            Log in
                        </button>
                    </div>
                </div>

                <div className='bg-dark-orange p-4 rounded-lg'>
                    <p className='text-sm font-medium text-white'>
                        Get US $10 off<br />with a new supplier
                    </p>
                </div>

                <div className='bg-dark-blue p-4 rounded-lg text-white'>
                    <p className='text-sm font-medium'>
                        Send quotes with<br />supplier preferences
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero