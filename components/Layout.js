import React from 'react'
import { Navbar } from './Navbar'
import ToastWrapper from './Toast'

export function Layout({ children }) {
  return (
    <ToastWrapper>
      <div className='mb-16'>
        <Navbar />
        <div className='px-4'>
          {children}
        </div>
      </div>
    </ToastWrapper>
  )
}