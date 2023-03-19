import { HiMenuAlt4, HiPlus } from 'react-icons/hi'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Company', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
  const router = useRouter()
  const [IsHamburberOpen, setIsHamburberOpen] = useState(false)
  return (
    <div as="nav" className="bg-black h-14 py-3">
      <div className='flex flex-row h-full w-full pl-6 pr-3 items-center'>
        <ul className='flex flex-none h-full'>
          <li>
            <img onClick={() => router.replace('/')} class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
          </li>
        </ul>

        <ul className='flex grow h-full'></ul>

        <ul className='flex h-full text-sm space-x-1'>
          <li className='h-full'>
            <button onClick={() => router.replace('/login')} className='rounded-full text-center align-middle h-full px-3 font-medium text-white'>Log in</button>
          </li>
          <li className='h-full'>
            <button onClick={() => router.replace('/register')} className='rounded-full text-center align-middle h-full px-3 font-medium text-black bg-white'>Sign up</button>
          </li>
          <li className='h-full'>
            <button onClick={() => setIsHamburberOpen(!IsHamburberOpen)} className='rounded-full text-center align-middle h-full w-full aspect-square max-h-9 text-white'>
              {!IsHamburberOpen ? <HiMenuAlt4 className='h-5 w-5 m-auto' /> : <HiPlus className='h-5 w-5 m-auto' style={{transform: 'rotate(45deg)'}} />}
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}