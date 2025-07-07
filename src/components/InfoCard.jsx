import React from 'react';
import { IoCartOutline } from "react-icons/io5";
const InfoCard = ({ img, name, price, aksiya, reting }) => {
  return (
    <div>
      <div className=' shadow rounded-[8px] w-60 h-[330px] overflow-hidden flex flex-col justify-center items-center bg-[#ededed]'>
             <div className='relative'>
            {aksiya && (
            <div className='absolute top-2 left-[-100px] bg-[#DB4444] text-white text-xs px-2 py-1 rounded'>
            -{aksiya}
             </div>
            )}
            </div>
            <img src={img} alt="img" className='mt-[60px] w-[95%] h-[200px] rounded-[8px] object-cover' />
              <button className='flex justify-center items-center mt-[30px] py-[10px] gap-3 bg-black w-60 text-white text-sm rounded-[0_0_8px_8px] hover:bg-[#4a4a4a] transition duration-500'>
                <IoCartOutline />Add to Cart
              </button>
            </div>
            <div className=' mt-[20px]'>
              <h3 className='font-semibold text-md mb-2'>{name}</h3>
              <p className='font-700 text-14px text-red-500 '>$ {price}</p>
              <p className='text-sm text-gray-600'>Reyting: {reting}⭐</p>
      
            </div>
    </div>
  );
};

export default InfoCard;
