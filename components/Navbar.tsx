import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between items-center py-4'>
          <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/cmp" className="hover:text-blue-500">Camp</Link>
          <Link href="/info" className="hover:text-blue-500">Info</Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/login"> Login</Link>
            <Link href="/register"> Register</Link>
          </div>
        </nav>
    </>
  )
}

export default Navbar
