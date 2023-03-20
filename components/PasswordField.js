import { forwardRef, useRef, useState, useImperativeHandle } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'

export const PasswordField = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef(null)
  const onClickReveal = () => {
    setIsOpen(!isOpen)
    if (inputRef.current) {
      inputRef.current.focus({preventScroll: true})
    }
  }
  return (
    <div className='relative w-full'>
      <label className='text-start block mr-3 mb-2 font-semibold' htmlFor="Password">Password</label>
      <div className='relative '>
        <input
          className='h-10 w-full block text-md pl-4 pr-10 rounded-md border'
          id="password"
          ref={inputRef}
          name="password"
          type={isOpen ? 'text' : 'password'}
          autoComplete='current-password'
          {...props}
        />
        <div className='absolute flex right-0 top-0 bottom-0 h-10 w-10 text-md justify-center items-center'>
          <button type='button' className='h-auto w-full' aria-label={isOpen ? 'Mask password' : 'Reveal password'} onClick={onClickReveal}>
            {isOpen ? <HiEyeOff className='m-auto' /> : <HiEye className='m-auto' />}
          </button>
        </div>
      </div>
    </div>
  )
})
PasswordField.displayName = 'PasswordField'