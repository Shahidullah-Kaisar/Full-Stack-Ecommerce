import React from 'react';
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {

    return (
        <div className='flex items-center justify-between py-3 px-[4%]'>
            <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
            <p className="text-xl font-semibold text-purple-700">Admin Panel</p>
            <button onClick={()=> setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-gray-500 duration-800'>Logout</button>
        </div>
    );
};

export default Navbar;