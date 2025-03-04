import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <nav className="flex flex-col sm:flex-row gap-4">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/cmp" className="hover:text-blue-500">Camp</Link>
          <Link href="/info" className="hover:text-blue-500">Info</Link>
        </nav>
    </div>
  )
}

export default Navbar
