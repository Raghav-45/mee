import React, { useEffect, useState, createContext, useContext, useRef } from 'react'

export const Toast = (props) => {
  const title = props.Details.title
  const description = props.Details.description
  const status = props.Details.status
  const duration = props.Details.duration
  const isClosable = props.Details.isClosable

  const ToastRef = useRef(null)

  const [showToast, setShowToast] = useState(true)
  setTimeout(() => {setShowToast(false)}, duration)
  setTimeout(() => {ToastRef?.current?.remove()}, duration)

  return (
    <div ref={ToastRef} id="toast-warning" className={`flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800`} style={{animation: `fadein 0.5s, fadeout 0.5s ${duration/1000 - 0.25}s`, visibility: showToast && 'visible'}} role="alert">
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
        <span className="sr-only">{status} icon</span>
      </div>
      <div className="ml-3 text-sm font-normal">{description}</div>
      <button type="button" onClick={() => ToastRef?.current?.remove()} className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-warning" aria-label="Close">
        <span className="sr-only">Close</span>
        {isClosable && <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>}
      </button>
    </div>
  )
}

const ToastContext = createContext({
  toast: () => Promise,
})

export const useToast = () => useContext(ToastContext)

export default function ToastWrapper({ children }) {
  const [toastList, setToastList] = useState([])
  const toast = (t) => {
    setToastList([...toastList, t])
    console.log(toastList)
  }
  const value = {
    toast
  }

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ul id='Toast-area' className='flex flex-col fixed mx-auto z-10 bottom-7 w-full items-center'>
        {toastList.map((elem) => <Toast Details={elem} />)}
      </ul>
    </ToastContext.Provider>
  )
}