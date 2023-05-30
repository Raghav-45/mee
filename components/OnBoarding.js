import React from 'react'
import { Box, Button, Center, Container, Flex, Heading, Text } from '@chakra-ui/react'
import { FaBolt } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'

export const OnBoarding = (props) => {
  return (
    <Container maxW='container.lg' h={'80vh'} justifyContent={'space-between'} centerContent>
      <Flex alignItems={'center'} flexGrow={1} flexShrink={1} flexBasis={'auto'}>
        <Flex h={'200px'} w={'200px'} justifyContent={'center'} alignItems={'center'} rounded={'full'} border='1px' borderColor='gray.500'>
          <Flex h={'calc(100% - 80px + 4px)'} w={'calc(100% - 80px + 4px)'} justifyContent={'center'} alignItems={'center'} rounded={'full'} border='2px' borderColor='gray.700'>
            <FaBolt fontSize={60} />
          </Flex>
        </Flex>
      </Flex>
      <Box w={'full'} p={5} textAlign={'center'}>
        <Heading as='h2' size='2xl' mb={4}>Try Electricity</Heading>
        <Text textAlign={'center'} mb={8}>Get a new experience with a discount.<br />Use ecological transport profitably<br />and to nature advantege.</Text>
        <Button onClick={props.onTrynow} h={12} w={'full'} rightIcon={<HiArrowRight />} bg={'black'} color={'white'} variant={'solid'} rounded={'full'}>Try Now!</Button>
      </Box>
    </Container>
  )
}