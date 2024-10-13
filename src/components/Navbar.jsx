import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-gray-700 text-white py-4 px-7">
        <Link to="/"className='text-2xl front-semibold'>Zipkart</Link>
    </header>
  )
}

export default Navbar;