import {
  chakra,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react'
import { Logo } from '../../../components/Logo'
import { OAuthButtonGroup } from '../../../components/OAuthButtonGroup'
import { PasswordField } from '../../../components/PasswordField'
import { useRouter } from 'next/router'

import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import { db } from '../../../utils/init-firebase'
import useMounted from '../../../hooks/useMounted'
import { doc, setDoc } from 'firebase/firestore'
import { updateProfile } from "firebase/auth"

export default function Register() {
  const router = useRouter()
  const { register } = useAuth()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()
  const mounted = useMounted()

  return (
    <div className='pt-12'>
      <div className='flex flex-col'>
        <div>
          <Logo />
          <div className='flex flex-col mt-6 text-center gap-2'>
            <h2 className='text-2xl w-full font-bold'>Create your account</h2>
            <div className='flex flex-row w-full text-center justify-center gap-x-1'>
              <p className='text-gray-800'>Have an account?</p>
              <a className='text-blue-400 font-semibold' onClick={() => router.replace('/login')}>Sign up</a>
            </div>
          </div>
        </div>
        <div className='mt-8 px-4'>
          <form
            onSubmit={async e => {
              e.preventDefault()
              if (!name || !email || !password) {
                // toast({
                //   description: 'Credentials not valid.',
                //   status: 'error',
                //   duration: 9000,
                //   isClosable: true,
                // })
                return
              }
              // your register logic here
              setIsSubmitting(true)
              register(email, password)
                .then(async res => {
                  await updateProfile(res.user, { displayName: name })
                  await setDoc(doc(db, "UserDetails", res.user.uid), {
                    Email: res.user.email,
                    PhotoURL: res.user.photoURL,
                    DisplayName: name,
                    uid: res.user.uid
                  })
                  // toast({
                  //   title: 'Account created.',
                  //   description: "We've created account for you.",
                  //   status: 'success',
                  //   duration: 3000,
                  //   isClosable: true,
                  // })
                  router.replace('/profile')
                })
                .catch(error => {
                  console.log(error.message)
                  // toast({
                  //   description: error.message,
                  //   status: 'error',
                  //   duration: 9000,
                  //   isClosable: true,
                  // })
                })
                .finally(() => {
                  mounted.current && setIsSubmitting(false)
                })
            }}
          >
            <div className='flex flex-col'>
              <div className='flex flex-col gap-y-5'>
                <div className='relative w-full'>
                  <label className='text-start block mr-3 mb-2 font-semibold' htmlFor="Name">Name</label>
                  <input className='h-10 w-full block text-md px-4 rounded-md border' id="Name" type="text" autoComplete='name' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className='relative w-full'>
                  <label className='text-start block mr-3 mb-2 font-semibold' htmlFor="Email">Email</label>
                  <input className='h-10 w-full block text-md px-4 rounded-md border' id="email" type="email" autoComplete='email' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='relative w-full'>
                  <label className='text-start block mr-3 mb-2 font-semibold' htmlFor="Password">Password</label>
                  <input className='h-10 w-full block text-md px-4 rounded-md border' id="password" type="passsord" autoComplete='password' value={password} onChange={e => setPassword(e.target.value)} />
                </div>
              </div>
            </div>
            <div className='flex flex-row h-6 mt-6 justify-between'>
              <div class="flex items-center">
                <input checked={rememberMe} onChange={(e) => setRememberMe(!rememberMe)} id="RememberMe" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600" />
                <label for="RememberMe" class="ml-2 text-md text-gray-800">Remember me</label>
              </div>
              <a className='text-blue-400 text-sm align-baseline leading-normal font-semibold' onClick={() => router.replace('/forgot-password')}>Forgot password?</a>
            </div>
            <div className='flex flex-col mt-6'>
              {!isSubmitting ? (
                <button className='h-10 justify-center font-semibold text-white rounded-md bg-blue-400 px-4' type='submit'>Register</button>
              ) : (
                <button type="button" class="flex flex-row items-center h-10 justify-center font-semibold text-white rounded-md bg-blue-400 px-4" disabled>
                  <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-200 animate-spin fill-blue-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                </button>
              )}
              <div className='flex flex-row items-center mt-6'>
                <hr className='grow opacity-60 w-full border-solid border-0 border-b' aria-orientation="horizontal"></hr>
                <p className='grow-0 w-full text-sm mx-2'>or continue with</p>
                <hr className='grow opacity-60 w-full border-solid border-0 border-b' aria-orientation="horizontal"></hr>
              </div>
              <OAuthButtonGroup />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
