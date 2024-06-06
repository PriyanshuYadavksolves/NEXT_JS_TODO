import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center bg-slate-700 px-8 '>
        <Link className='text-white font-bold' href={'/'}>Hero'sHappy</Link>
        <Link className='text-white p-2 hover:underline' href={'/addTopic'}>Add Topic</Link>
      
    </div>
  )
}

export default NavBar
