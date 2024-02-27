import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";


const Card = () => {
  return (
    <div className='relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden '>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada
        </p>
        <div className='footer absolute bottom-0 bg-zinc-900/90 w-full  left-0'>
            <div className='flex items-center py-3 px-8 justify-between mb-3'>
                <h5>.4mb</h5>
                <span className='w-7 h-7 bg-sky-600 rounded-full flex items-center justify-center'><FiDownload size="0.8em" color='white'/></span>
            </div>
            <div className='tag w-full py-4 bg-green-700 flex items-center justify-center'>
              <h3 className='text-sm font-semibold'>Download Now</h3>
            </div>
        </div>

    </div>

  )
}

export default Card;
