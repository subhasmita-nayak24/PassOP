import React from 'react'

const Navbar = () => {
  const openGithubProfile = () => {
    window.open("https://github.com/subhasmita-nayak24", "_blank", "noopener,noreferrer");
  }
  return (
    <nav className='bg-purple-900 text-white  '>
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

        <div className='logo font-bold text-xl flex '>
          <img  width={'33'} src="pas.png" alt="key" />
          <span className='text-purple-400'>&lt;</span>
          Pass
          <span className='text-purple-400'>OP/&gt;</span>
        </div>


        {/* <ul className='flex gap-8 items-center'>
          <li className='flex  gap-4 items-center'>
            <div className='flex flex-col items-center'>
              <lord-icon
                src="https://cdn.lordicon.com/qeltvbrs.json"
                trigger="hover"
                colors="primary:#d1e3fa,secondary:#f49cc8" style={{ width: '38px', height: '38px' }} trigger='loop'>
              </lord-icon>
              <a className='hover:font-bold' href='#'>Home</a>
            </div>


            <div className='flex flex-col items-center'>
              <lord-icon
                src="https://cdn.lordicon.com/etgnxeer.json"
                trigger="hover"
                colors="primary:#d1e3fa,secondary:#ee66aa" style={{ width: '38px', height: '38px' }}  trigger='loop' >
              </lord-icon>
              <a className='hover:font-bold' href='#'>About us</a>
            </div>


            <div className='flex flex-col items-center'>
            <lord-icon
              src="https://cdn.lordicon.com/xfzuyvam.json"
              trigger="hover"
              colors="primary:#d1e3fa,secondary:#ee66aa" style={{ width: '38px', height: '38px' }} trigger='loop'>
            </lord-icon>
            <a className='hover:font-bold' href='#'>Contact</a>
            </div>
          </li>
        </ul> */}
        <button onClick={openGithubProfile} className='text-white my-1 bg-purple-800 rounded-full flex items-center justify-between ring-white ring-1'>
          <img className='w-10 p-1' src="github.png" alt="github logo" />
          <span className='font-bold px-2'>Github
          
          </span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
