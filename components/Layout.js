import React from 'react'
import { Navbar } from './Navbar'
// import { UseMyToast } from './useToast'
import ToastWrapper, { ToastList, useToast } from './Toast'

export function Layout({ children }) {
  return (<ToastWrapper>
    <div className='mb-16'>
      <Navbar />
      <div className='px-4'>
        {children}
      </div>
      {/* <button onClick={() => useToast({
                title: 'Info',
                description: "Improve password difficulty.",
                status: 'warning',
                duration: 12000,
                isClosable: true,
              })}>Toast</button> */}
    </div>
  </ToastWrapper>)
}