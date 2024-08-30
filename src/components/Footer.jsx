import React from 'react'

function Footer() {
    return (
        <div className='bg-purple-900 text-white text-center justify-center  w-full'>
            <div className='logo text-2xl  font-extrabold text-white '>
                <span className='text-purple-400'>&lt;</span>
                <span>Pass</span><span className='text-purple-400'>OP/&gt;</span>
                </div>

           <div className='flex justify-center items-center'> Created with <img className='w-9 mx-4' src="heart.png" alt="love" /> By Subhasmita</div>

        </div>
    )
}

export default Footer
