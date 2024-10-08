import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-red-400 h-14'>
     <div className='text-black-400 flex justify-between items-center'>
     
      <h1 className='text=xl m-2 cursor-pointer text-yellow-400 '><b><i>Navbar</i></b></h1>
      <ul className='flex gap-5 mr-4 cursor-pointer'>
      <Link className='hover:text-blue-400' href= "/" >Home</Link>
      <Link className='hover:text-yellow-950' href= "/about" >about</Link>
      <Link className='hover:text-red-200' href= "/contact" >contact</Link>
      <Link className='hover:text-purple-800' href= "/skills" >skills</Link>

    
      </ul>

    
      </div>


    </div>
  )
}

export default Navbar
