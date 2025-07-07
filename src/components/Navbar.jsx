import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";

const Navbar = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    setSearchTerm(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <nav className='flex justify-between p-8 items-center bg-white shadow'>
      <h1 className='text-2xl font-bold'>Exclusive</h1>

      <ul className='flex items-center gap-10'>
        <li className='cursor-pointer hover:text-blue-600'>Home</li>
        <li className='cursor-pointer hover:text-blue-600'>Contact</li>
        <li className='cursor-pointer hover:text-blue-600'>About</li>
        <li className='cursor-pointer hover:text-blue-600'>Sign Up</li>
      </ul>

      <div className='flex items-center gap-8'>
        <div className='relative'>
          <input
            type="text"
            placeholder='What are you looking for?'
            className='w-[250px] bg-[#dddddd] px-[20px] py-[5px] rounded'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <FiSearch
            className='absolute top-[9px] left-[220px] cursor-pointer'
            onClick={handleSearch}
          />
        </div>
        <FaRegHeart className='cursor-pointer' />
        <IoCartOutline className='cursor-pointer' />
        <IoPersonOutline className='cursor-pointer' />
      </div>
    </nav>
  );
};

export default Navbar;
