import React from 'react'

const Background = () => {
    return (
        <>
            <div className='fixed  w-full h-screen'>
                <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold'>Docs App</div>
                <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] truncate text-[12vw] leading-none tracking-tighter font-semi-bold text-zinc-900'>Hello World</h1>
            </div>

        </>
    )
}

export default Background;
