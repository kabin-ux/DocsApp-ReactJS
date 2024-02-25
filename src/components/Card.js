import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";


const Card = () => {
  return (
    <div className='relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden '>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada
        </p>
        <div className='footer absolute bottom-0 bg-sky-200 w-full  py-3 left-0'>
            <div className=''>
                <h5>.4mb</h5>
                <FiDownload />
            </div>
        </div>

    </div>

  )
}

export default Card;
