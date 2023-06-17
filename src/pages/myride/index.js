import { chakra, Box, Button, Checkbox, Container, Divider, FormControl, FormLabel, Heading, HStack, Input, Stack, Text, Center, useToast, Avatar, VStack, Flex, Badge, SimpleGrid } from '@chakra-ui/react'

import { Icon } from '@chakra-ui/react'
import { HiLocationMarker } from 'react-icons/hi'
import { TbLocationFilled } from 'react-icons/tb'
import { AiFillStar } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin, SiMessenger } from 'react-icons/si';

import { Logo } from '../../../components/Logo'
import { OAuthButtonGroup } from '../../../components/OAuthButtonGroup'
import { PasswordField } from '../../../components/PasswordField'
import { useRouter } from 'next/router'

import { useState, useEffect, useRef } from 'react'
import useMounted from '../../../hooks/useMounted'
import { supabase } from './../../../lib/supabaseClient'

export default function RideInfoPage() {
  const router = useRouter()
  const toast = useToast()
  const mounted = useMounted()

  return (
    <Container maxW='container.lg' overflowX='auto' py={6}>
      <Box pt={5} textAlign={'center'}>
        {/* <Text textAlign={'left'} fontSize={'xl'}>Pickup Location - {'Raghubir Nagar'} </Text>
        <Text textAlign={'left'} fontSize={'xl'}>Drop Location - {'Tegore Garden'} </Text>
        <Text textAlign={'left'} fontSize={'xl'}>person_id - {'person uuid'} </Text>
        <Text textAlign={'left'} fontSize={'xl'}>driver_id - {'driver uuid'} </Text> */}
        {/* <Text textAlign={'left'} fontSize={'xl'}>booked_at - {'Time'} </Text> */}
        {/* <Text textAlign={'left'} fontSize={'xl'}>started_at - {'Time'} </Text> */}
        {/* <Text textAlign={'left'} fontSize={'xl'}>drop_at - {'Time'} </Text> */}
        {/* <Text textAlign={'left'} fontSize={'xl'}>Fare - {'Rs. 10'} </Text> */}
        <Avatar my={3} size='xl' bg='blackAlpha.300' name='Christian Nwamba' src='https://bit.ly/code-beast' />
        <Heading as='h3' size='xl' style={{wordSpacing: '-5px'}}>Raghav Driver</Heading>
        <Box display='inline-flex' mt={0.5} textAlign={'center'} alignItems='center'>
          {Array(5).fill('').map((elem, i) => (<Icon as={AiFillStar} key={i} color={i < 2 ? 'blackAlpha.800' : 'blackAlpha.500'} /> ))}
          <Box as='span' ml={2} color='blackAlpha.900' fontSize='sm'>{267} ratings</Box>
        </Box>
        <SimpleGrid pt={4} px={6} columns={2} spacing={2}>
          <Flex>
            <Icon as={HiLocationMarker} color={'blackAlpha.800'} h={'auto'} w={6} />
            <Box ml='3' textAlign={'left'}>
              <Text fontSize='sm' fontWeight='bold'>410</Text>
              <Text fontSize='xs'>Rides Shared</Text>
            </Box>
          </Flex>
          <Flex>
            <Icon as={TbLocationFilled} color={'blackAlpha.800'} h={'auto'} w={6} />
            <Box ml='3' textAlign={'left'}>
              <Text fontSize='sm' fontWeight='bold'>2,674 KM</Text>
              <Text fontSize='xs'>Distance Seated</Text>
            </Box>
          </Flex>
        </SimpleGrid>
      </Box>
    </Container>
  )
}