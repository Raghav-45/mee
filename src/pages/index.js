import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Text, Center, Box, Input, Button, Stack, VStack, HStack, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { AiFillCar } from 'react-icons/ai'
import { FiPackage } from 'react-icons/fi'
import { GiCarWheel } from 'react-icons/gi'

import { HiLocationMarker } from 'react-icons/hi'
import { TbLocationFilled } from 'react-icons/tb'
import { RiTruckFill } from 'react-icons/ri'
import { FaTruckLoading } from 'react-icons/fa'
import { TbTruckLoading } from 'react-icons/tb'

import { Toast } from "../../components/Toast";

export default function Home() {
  const toast = useToast()

  function TabChange(index) {
    index == 2 ? toast({
      title: 'Info',
      description: "Sorry, Renting Service is Currently not Avaliable",
      status: 'warning',
      duration: 112000,
      isClosable: true,
      variant:"information",
    }) : toast.closeAll()
  }
  return (
    <Tabs onChange={(index) => TabChange(index)}>
      <TabList>
        <Tab height={24} width={24} _selected={{ color: 'black', bg: 'blackAlpha.200', borderBottomColor: 'black' }} >
          <Center>
            <Flex boxSize={'full'} alignItems={'center'} flexDirection='column'>
              <AiFillCar size={'22'} />
              <Text pt={1.5}>Ride</Text>
            </Flex>
          </Center>
        </Tab>

        <Tab height={24} width={24} _selected={{ color: 'black', bg: 'blackAlpha.200', borderBottomColor: 'black' }} >
          <Center>
            <Flex boxSize={'full'} alignItems={'center'} flexDirection='column'>
              <FiPackage size={'22'} />
              <Text pt={1.5}>Deliver</Text>
            </Flex>
          </Center>
        </Tab>

        <Tab height={24} width={24} _selected={{ color: 'black', bg: 'blackAlpha.200', borderBottomColor: 'black' }}>
          <Center>
            <Flex boxSize={'full'} alignItems={'center'} flexDirection='column'>
              <GiCarWheel size={'22'} />
              <Text pt={1.5}>Rent</Text>
            </Flex>
          </Center>
        </Tab>

      </TabList>
      <TabPanels>
        <TabPanel>
          <Flex direction={'column'}>
            <Text fontSize={'3xl'} as='b'>Request a ride now</Text>
            <Box py={8}>
              <InputGroup position={'relative'} size={'lg'} my={2} border={'none'}>
                <InputLeftElement pointerEvents='none' children={<TbLocationFilled color='gray.300' />} />
                <Input variant='filled' placeholder='Enter Pickup Location' />
              </InputGroup>
              <InputGroup position={'relative'} size={'lg'} my={2} border={'none'}>
                <InputLeftElement pointerEvents='none' children={<HiLocationMarker color='gray.300' />} />
                <Input variant='filled' placeholder='Enter Destination' />
              </InputGroup>
            </Box>
            <VStack spacing={2}>
              <Button width={'full'} variant='primary'>Request now</Button>
              <Button width={'full'} variant='secondary'>Schedule for later</Button>
            </VStack>
          </Flex>
        </TabPanel>
        <TabPanel>
          <Flex direction={'column'}>
            <Text fontSize={'3xl'} as='b'>Request a ride now</Text>
            <Box py={8}>
              <InputGroup position={'relative'} size={'lg'} my={2} border={'none'}>
                <InputLeftElement pointerEvents='none' children={<FiPackage color='gray.300' />} />
                <Input variant='filled' placeholder='Enter Pickup Location' />
              </InputGroup>
              <InputGroup position={'relative'} size={'lg'} my={2} border={'none'}>
                {/* <InputLeftElement pointerEvents='none' children={<FaTruckLoading color='gray.300' style={{'-webkit-transform': 'scaleX(-1)', transform: 'scaleX(-1)'}} />} /> */}
                <InputLeftElement pointerEvents='none' children={<RiTruckFill color='gray.300' />} />
                <Input variant='filled' placeholder='Enter Destination' />
              </InputGroup>
            </Box>
            <VStack spacing={2}>
              <Button width={'full'} variant='primary'>Request now</Button>
              <Button width={'full'} variant='secondary'>Schedule for later</Button>
            </VStack>
          </Flex>
        </TabPanel>
        <TabPanel>
          <Flex direction={'column'}>
            <Text fontSize={'3xl'} as='b'>Request a ride now</Text>
            <Box py={8}>
              <InputGroup position={'relative'} size={'lg'} my={2} border={'none'}>
                <InputLeftElement pointerEvents='none' children={<TbLocationFilled color='gray.300' />} />
                <Input variant='filled' placeholder='Enter Pickup Location' />
              </InputGroup>
              <InputGroup position={'relative'} size={'lg'} my={2} border={'none'}>
                <InputLeftElement pointerEvents='none' children={<HiLocationMarker color='gray.300' />} />
                <Input variant='filled' placeholder='Enter Destination' />
              </InputGroup>
            </Box>
            <VStack spacing={2}>
              <Button width={'full'} variant='primary'>Request now</Button>
              <Button width={'full'} variant='secondary'>Schedule for later</Button>
            </VStack>
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}