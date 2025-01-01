
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Track the menu state (open or closed)

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  return (
    <>
      <div className='flex justify-between items-center bg-[#050523] text-white  text-center h-[60px] p-4 w-[100%]'>
        {/* Logo */}
        <div className='font-bold text-[30px] hover:text-[#1c5732] cursor-pointer'>Technology</div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-12 '>
        <li className='font-bold text-[16px]  hover:text-[#1c5732] cursor-pointer text-white '><Link to="/" className='text-white'>Home</Link></li>
        <li className='font-bold text-[16px]  hover:text-[#1c5732] cursor-pointer'><Link to="/about" className='text-white'>About</Link></li>
      <li className='font-bold text-[16px]  hover:text-[#1c5732] cursor-pointer'><Link to="/technology" className='text-white'>Technology</Link></li>
         <li className='font-bold text-[16px]  hover:text-[#1c5732] cursor-pointer'><Link to="/posts" className='text-white'>Post Section</Link></li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className='md:hidden' onClick={toggleMenu}>
          <div className='w-6 h-1 bg-white my-1'></div>
          <div className='w-6 h-1 bg-white my-1'></div>
          <div className='w-6 h-1 bg-white my-1'></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10`}
        onClick={toggleMenu}
      >
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } fixed top-0 left-0 w-2/3 bg-[#050523] p-8 text-white`}
        >
          <ul className='flex flex-col gap-8 text-center'>
            <li className='font-bold text-[20px]' onClick={toggleMenu}><Link to="/">Home</Link></li>
            <li className='font-bold text-[20px]' onClick={toggleMenu}><Link to="/about">About</Link></li>
            <li className='font-bold text-[20px]' onClick={toggleMenu}><Link to="/technology">Technology</Link></li>
            <li className='font-bold text-[20px]' onClick={toggleMenu}><Link to="/posts">Post Section</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;


