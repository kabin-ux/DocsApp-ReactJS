import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const Card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints ={reference} whileDrag={{scale: 1.3}}   dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
    className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden '>
        <div className='flex justify-center'>
          <FaRegFileAlt  />
        </div>
        <p className='text-sm leading-tight mt-5 '>{data.desc}
        </p>
        <div className='footer absolute bottom-0 bg-zinc-900/90 w-full  left-0'>
            <div className='flex items-center py-3 px-8 justify-between mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-sky-600 rounded-full flex items-center justify-center'>
                  {data.close ? <IoIosCloseCircle color='white'/>: <FiDownload size="0.8em" color='white'/>}
                </span>
            </div>
            {data.tag.isOpen ? (
                <div className={`tag w-full py-4 ${data.tag.tagColor === "red" ? "bg-yellow-600" : "bg-green-600"} flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
              </div> 
            ) : null}
          
        </div>

    </motion.div>

  )
}

export default Card;
