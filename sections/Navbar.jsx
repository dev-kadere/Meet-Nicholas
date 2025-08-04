import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    const links = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        {name: 'Education', href: '#education'},
        { name: 'Contact', href: '#contact' },
    ];
  return (
    <nav className=' text-gray-800  mx-auto shadow-md'>
        <div className='flex flex-row gap-7 justify-center h-14 items-center  '>
            <div className='text-2xl font-bold'>Dev kadere</div>
            <ul className="flex flex-row gap-7">
                {links.map((link,index) => (
                    <li key={index}>
                        <Link href={link.href} className='text-xl hover:text-blue-600'>
                            {link.name}
                        </Link>
                    </li>
            ))}
            </ul>
        </div>
    </nav>

  )
}

export default Navbar