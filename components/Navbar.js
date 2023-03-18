import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  Spacer,
} from '@chakra-ui/react'
import { HiMenuAlt4, HiPlus } from 'react-icons/hi'
import { Logo } from './BigLogo'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const router = useRouter()
  const [IsHamburberOpen, setIsHamburberOpen] = useState(false)
  return (
    // <Box as="section" pb={{ base: '12', md: '24' }}>
      <Box as="nav" bg="black" boxShadow="sm">
        <Container maxW='unset' py={{ base: '3', lg: '3' }}>
          <HStack justify="space-between">
            <Logo textColor='white' size={'lg'} flex='auto' />
            <Flex justify="space-between" flex="1">
              <Spacer />
              <HStack spacing={0.5} align='center'>
                <Button size={'sm'} rounded='full' variant='primary' _hover={{ bg: "whiteAlpha.400" }} onClick={() => router.replace('/login')}>Log in</Button>
                <Button size={'sm'} rounded='full' variant='secondary' _hover={{ bg: "whiteAlpha.800" }} onClick={() => router.replace('/register')}>Sign up</Button>
              </HStack>
              <IconButton
                ml={0.5}
                variant="ghost"
                textColor='white'
                rounded='full'
                size={'sm'}
                onClick={() => setIsHamburberOpen(!IsHamburberOpen)}
                _hover={{ bg: "whiteAlpha.400" }}
                icon={!IsHamburberOpen ? <HiMenuAlt4 fontSize="1.25rem" /> : <HiPlus fontSize="1.25rem" style={{transform: 'rotate(45deg)'}} />}
                aria-label="Open Menu"
              />
            </Flex>
          </HStack>
        </Container>
      </Box>
    // </Box>
  )
}