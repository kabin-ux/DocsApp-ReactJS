import React, { useRef } from 'react'
import Card from './Card';

const Foreground = () => {

  const ref = useRef(null);

  const data = [
    {desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ", 
    filesize: ".9mb", 
    close: true, 
    tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green", },},

    {desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", 
    filesize: ".9mb", 
    close: true, 
    tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue", },},

    {desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ", 
    filesize: ".9mb", 
    close: false, 
    tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green", },},

    
    {desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", 
    filesize: ".9mb", 
    close: false, 
    tag: {isOpen: true, tagTitle: "Download Now", tagColor: "red", },},

    
    {desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ", 
    filesize: ".9mb", 
    close: true, 
    tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green", },},
  ]

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-[35px] flex-wrap p-7'>
      {data.map((item, index) => (
        <Card data={item} reference={ref}/>
      ))}
      
    </div>
  )
}

export default Foreground;
