import React from 'react'
import { assets } from '../assets/assets'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faRocketchat } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
    return (
        <div className='flex py-4 justify-between items-center border-b px-16'>
            <div className='flex items-center justify-start '>
                <img className='w-36 cursor-pointer' src={assets.logo_colored} alt="" />
            </div>
            <div className='flex items-center justify-between border-2 border-blue-500 w-[666px] rounded-md   bg-white'>
                <input type="text" placeholder='Search' className='px-2 py-1.5 border-r border-blue-500   outline-none w-full' />
                <div className='flex items-center gap-2'>
                    <select className='outline-none px-2 py-1.5 '>
                        <option value="">All Category</option>
                    </select>
                    <button className='bg-blue-500 h-full px-5 py-1.5 text-white'>Search</button>
                </div>
            </div>

            <div className='flex items-center gap-4 text-sm text-center text-gray-500'>
                <div>
                    <FontAwesomeIcon className='text-xl cursor-pointer' icon={faUser} color="gray" />
                    <p>Profile</p>
                </div>
                <div>
                    <FontAwesomeIcon className='text-xl cursor-pointer' icon={faRocketchat} color="gray" />
                    <p>Message</p>
                </div>
                <div>
                    <FontAwesomeIcon className='text-xl cursor-pointer' icon={faHeart} color="gray" />
                    <p>Heart</p>
                </div>
                <div>
                    <FontAwesomeIcon className='text-xl cursor-pointer' icon={faCartShopping} color="gray" />
                    <p>Cart</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
