import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/SearchSlice'

function Navbar() {
  const dispatch = useDispatch()
  return (
    <nav className='flex flex-col lg:flex-row justify-between mx-6 py-3 mb-6'>
        <div>
            <h3 className='text-xl font-bold text-gray-800 '>{new Date().toLocaleDateString()}</h3>
            <h1 className='text-2xl font-bold '>Foodie Zone</h1>
        </div>
        <div>
            <input className='p-3 border text-sm rounded-md w-full lg:w-[25vw]' type="search" name="search" placeholder='Search Here...' autoComplete='off' onChange={(e) => dispatch(setSearch(e.target.value))} />
        </div>
    </nav>
  )
}

export default Navbar