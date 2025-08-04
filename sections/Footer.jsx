import React from 'react'

const Footer = () => {
  return (
    <footer className=' mt-10 bg-blue-600'>
      <div className='container mx-auto py-4 text-center text-white'>
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer