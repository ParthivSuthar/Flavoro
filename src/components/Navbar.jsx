import React from 'react'

function Navbar() {
  return (
    <nav className='flex flex-col lg:flex-row justify-between mx-6 py-3'>
        <div>
            <h3 className='text-xl font-bold text-gray-800 '>{new Date().toLocaleDateString()}</h3>
            <h1 className='text-2xl font-bold '>Foodie Zone</h1>
        </div>
        <div>
            <input className='p-3 border text-sm rounded-md w-full lg:w-[25vw]' type="search" name="search" placeholder='Search Here...' autoComplete='off' />
        </div>
    </nav>
  )
}

export default Navbar