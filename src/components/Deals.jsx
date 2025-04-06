import React from 'react'
import { assets } from '../assets/assets'

function Deals() {
    const products = [
        { name: "Soft chairs", price: "USD 10" },
        { name: "Kitchen mixer", price: "USD 100" },
        { name: "Sofa & chair", price: "USD 10" },
        { name: "Blenders", price: "USD 30" },
        { name: "Kitchen dishes", price: "USD 10" },
        { name: "Smart watches", price: "USD 10" },
        { name: "Home appliance", price: "USD 10" },
        { name: "Coffee maker", price: "USD 10" }
    ]

    return (
        <div className='bg-white flex '>
            {/* Left Section */}
            <div className='relative w-60 '>
                <img 
                    className='w-full h-full object-cover ' 
                    src={assets.right_side} 
                    alt="Home and outdoor" 
                />
                <div className='absolute top-6 left-4 text-white'>
                    <p className='text-xl font-semibold text-black'>Home and <br /> outdoor</p>
                    <button className='bg-white text-black py-1.5 mt-4 px-6 rounded-md font-medium hover:bg-gray-100 transition shadow-md'>
                        Source Now
                    </button>
                </div>
            </div>

            {/* Products Grid */}
            <div className='grid grid-cols-2 md:grid-cols-4  flex-1'>
                {products.map((product, index) => (
                    <div key={index} className='border  p-3 h-32 relative '>
                        <div className='flex flex-col justify-between h-full'>
                            <div>
                                <p className='text-md font-medium'>{product.name}</p>
                                <p className='text-gray-500 text-sm mt-1'>From<br/>{product.price}</p>
                            </div>
                            <div className='w-20 absolute right-2 bottom-2'>
                                <img 
                                    src={assets.tech1} 
                                    alt={product.name}
                                    className='w-full h-16 object-contain' 
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Deals