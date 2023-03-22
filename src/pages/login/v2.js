// import {
//   chakra,
//   Box,
//   Button,
//   Checkbox,
//   Container,
//   Divider,
//   FormControl,
//   FormLabel,
//   Heading,
//   HStack,
//   Input,
//   Stack,
//   Text,
//   useToast,
// } from '@chakra-ui/react'
import { Logo } from '../../../components/Logo'
import { OAuthButtonGroup } from '../../../components/OAuthButtonGroup'
import { PasswordField } from '../../../components/PasswordField'
import { useRouter } from 'next/router'

import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import { db } from '../../../utils/init-firebase'
import useMounted from '../../../hooks/useMounted'

import { useToast } from '../../../components/Toast'

export default function LoginV2() {
  // const router = useRouter()
  // const { login } = useAuth()
  // const [email, setEmail] = useState('')
  // const [name, setName] = useState('')
  // const [password, setPassword] = useState('')
  // const [isSubmitting, setIsSubmitting] = useState(false)
  // const toast = useToast()
  // const mounted = useMounted()
  // const inputRef = useRef(null)
  
  // useEffect(() => {inputRef.current.focus()}, [])
  
  const { toast } = useToast()

  return (
  <>
  <button onClick={() => toast({
    title: 'Info',
    description: "Improve password difficulty.",
    status: 'success',
    duration: 3000,
    isClosable: true,
  })} className='h-10 justify-center font-semibold text-white rounded-md bg-blue-400 px-4'>Show Success</button>
  <button onClick={() => toast({
    title: 'Info',
    description: "Improve password difficulty.",
    status: 'info',
    duration: 3000,
    isClosable: true,
  })} className='h-10 justify-center font-semibold text-white rounded-md bg-blue-400 px-4'>Show Info</button>
  <button onClick={() => toast({
    title: 'Info',
    description: "Improve password difficulty.",
    status: 'warning',
    duration: 3000,
    isClosable: true,
  })} className='h-10 justify-center font-semibold text-white rounded-md bg-blue-400 px-4'>Show Toast</button>
  <button onClick={() => toast({
    title: 'Info',
    description: "Improve password difficulty.",
    status: 'error',
    duration: 5000,
    isClosable: true,
  })} className='h-10 justify-center font-semibold text-white rounded-md bg-blue-400 px-4'>Show Error</button>
</>
    // <Container maxW="lg" py={{ base: '4', md: '24' }} px={{ base: '0', sm: '8' }}>
    //   <Stack spacing="2">
    //     <Text fontSize='xl' fontWeight={400}>What's your phone number or email?</Text>
    //     {/* <Stack spacing="6">
    //       <Logo color='blue.500' />
    //       <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
    //         <Heading size={{ base: 'lg', md: 'lg' }}>
    //           Log in to your account
    //         </Heading>
    //         <HStack spacing="1" justify="center">
    //           <Text color="muted">Don't have an account?</Text>
    //           <Button variant="link" colorScheme="blue" onClick={() => router.replace('/register')}>
    //             Sign up
    //           </Button>
    //         </HStack>
    //       </Stack>
    //     </Stack> */}
    //     <Box py={{ base: '0', sm: '8' }}
    //       // px={{ base: '4', sm: '10' }}
    //       bg={{ base: 'transparent', sm: 'bg-surface' }} boxShadow={{ base: 'none', sm: 'md' }} borderRadius={{ base: 'none', sm: 'xl' }}>
    //       <chakra.form
    //         onSubmit={async e => {
    //           e.preventDefault()
    //           if (!email || !password) {
    //             toast({
    //               description: 'Credentials not valid.',
    //               status: 'error',
    //               duration: 9000,
    //               isClosable: true,
    //             })
    //             return
    //           }
    //           // your login logic here
    //           setIsSubmitting(true)
    //           login(email, password)
    //             .then(res => {
    //               toast({
    //                 title: 'Login Success.',
    //                 description: "We've just Logged You In.",
    //                 status: 'success',
    //                 duration: 3000,
    //                 isClosable: true,
    //               })
    //               router.replace('/profile')
    //               // handleRedirectToOrBack()
    //             })
    //             .catch(error => {
    //               console.log(error.message)
    //               toast({
    //                 description: error.message,
    //                 status: 'error',
    //                 duration: 9000,
    //                 isClosable: true,
    //               })
    //             })
    //             .finally(() => {
    //               mounted.current && setIsSubmitting(false)
    //             })
    //         }}
    //       >
    //         <Stack spacing="6">
    //           <Stack spacing="5">
    //             <FormControl>
    //               {/* <FormLabel htmlFor="email">Email</FormLabel> */}
    //               <Input ref={inputRef} id="email" type="email" autoComplete='email' placeholder='Enter phone number or email' value={email} onChange={e => setEmail(e.target.value)} />
    //             </FormControl>
    //             {/* <PasswordField autoComplete='password' value={password} onChange={e => setPassword(e.target.value)} /> */}
    //           </Stack>
    //           {/* <HStack justify="space-between">
    //             <Checkbox defaultChecked>Remember me</Checkbox>
    //             <Button variant="link" colorScheme="blue" size="sm">
    //               Forgot password?
    //             </Button>
    //           </HStack> */}
    //           <Stack spacing="6">
    //             <Button type='submit' variant='primary' isLoading={isSubmitting}>Continue</Button>
    //             <HStack>
    //               <Divider />
    //               <Text fontSize="sm" whiteSpace="nowrap" color="muted">
    //                 or continue with
    //               </Text>
    //               <Divider />
    //             </HStack>
    //             <OAuthButtonGroup />
    //             <Text color={'#6B6B6B'} fontSize={'sm'} pr={'16px'} >By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</Text>
    //           </Stack>
    //         </Stack>
    //       </chakra.form>
    //     </Box>
    //   </Stack>
    // </Container>
  )
}