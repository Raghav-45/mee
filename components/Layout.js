import React from 'react'
import { Navbar } from './Navbar'

export function Layout({ children }) {
  return (
    <div className='mb-16'>
      <Navbar />
      <div className='px-4'>
        {children}
      </div>
    </div>
  )
}