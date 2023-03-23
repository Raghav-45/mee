// import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Text, Center, Box, Input, Button, Stack, VStack, HStack, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Tab } from '@headlessui/react'
import { AiFillCar } from 'react-icons/ai'
import { FiPackage } from 'react-icons/fi'
import { GiCarWheel } from 'react-icons/gi'

import { HiLocationMarker } from 'react-icons/hi'
import { TbLocationFilled } from 'react-icons/tb'
import { RiTruckFill } from 'react-icons/ri'
import { FaTruckLoading } from 'react-icons/fa'
import { TbTruckLoading } from 'react-icons/tb'
import { useToast } from '../../components/Toast'

import { Fragment } from 'react'

export default function Home() {
  const { toast } = useToast()

  function TabChange(index) {
    index == 2 && toast({
      title: 'Info',
      description: "Renting Service is currently not avaliable",
      status: 'warning',
      duration: 12000,
      isClosable: true,
    })
  }
  return (
    <Tab.Group onChange={(index) => TabChange(index)}>
      <Tab.List>
        <Tab className='h-24 w-24 ui-selected:text-black ui-selected:bg-black/10'>
          <div className='flex flex-col h-full w-full items-center justify-center'>
            <AiFillCar className='h-6 w-6' />
            <p className='pt-1.5'>Ride</p>
          </div>
        </Tab>
        <Tab className='h-24 w-24 ui-selected:text-black ui-selected:bg-black/10'>
          <div className='flex flex-col h-full w-full items-center justify-center'>
            <FiPackage className='h-6 w-6' />
            <p className='pt-1.5'>Deliver</p>
          </div>
        </Tab>
        <Tab className='h-24 w-24 ui-selected:text-black ui-selected:bg-black/10'>
          <div className='flex flex-col h-full w-full items-center justify-center'>
            <GiCarWheel className='h-6 w-6' />
            <p className='pt-1.5'>Rent</p>
          </div>
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className='p-4'>
          <div className='flex flex-col'>
            <p className='text-3xl font-bold'>Request a ride now</p>
            <div className='py-8'>
              <div className='h-12 my-2 rounded-md overflow-hidden'>
                <div className='absolute flex h-12 w-12 z-10 justify-center items-center text-lg'><TbLocationFilled /></div>
                <input className='relative h-full w-full hover:bg-[#E2E8F0] text-md pl-12 pr-4 rounded-md border' id="pickup-location" type="text" autoComplete='pickup-location' placeholder='Enter Pickup Location' />
              </div>
              <div className='h-12 my-2 rounded-md overflow-hidden'>
                <div className='absolute flex h-12 w-12 z-10 justify-center items-center text-lg'><HiLocationMarker /></div>
                <input className='relative h-full w-full hover:bg-[#E2E8F0] text-md pl-12 pr-4 rounded-md border' id="pickup-location" type="text" autoComplete='pickup-location' placeholder='Enter Destination' />
              </div>
            </div>
            <div className='flex flex-col'>
              <button className='h-10 justify-center font-semibold text-white rounded-md bg-black px-4' type='submit'>Request now</button>
              <button className='h-10 justify-center font-semibold text-black rounded-md px-4' type='submit'>Schedule for later</button>
            </div>
          </div>
        </Tab.Panel>
        <Tab.Panel className='p-4'>
          <div className='flex flex-col'>
            <p className='text-3xl font-bold'>Request a ride now</p>
            <div className='py-8'>
              <div className='h-12 my-2 rounded-md overflow-hidden'>
                <div className='absolute flex h-12 w-12 z-10 justify-center items-center text-lg'><FiPackage /></div>
                <input className='relative h-full w-full hover:bg-[#E2E8F0] text-md pl-12 pr-4 rounded-md border' id="pickup-location" type="text" autoComplete='pickup-location' placeholder='Enter Pickup Location' />
              </div>
              <div className='h-12 my-2 rounded-md overflow-hidden'>
                <div className='absolute flex h-12 w-12 z-10 justify-center items-center text-lg'><RiTruckFill /></div>
                <input className='relative h-full w-full hover:bg-[#E2E8F0] text-md pl-12 pr-4 rounded-md border' id="pickup-location" type="text" autoComplete='pickup-location' placeholder='Enter Destination' />
              </div>
            </div>
            <div className='flex flex-col'>
              <button className='h-10 justify-center font-semibold text-white rounded-md bg-black px-4' type='submit'>Request now</button>
              <button className='h-10 justify-center font-semibold text-black rounded-md px-4' type='submit'>Schedule for later</button>
            </div>
          </div>
        </Tab.Panel>
        <Tab.Panel className='p-4'>
          <div className='flex flex-col'>
            <p className='text-3xl font-bold'>Request a ride now</p>
            <div className='py-8'>
              <div className='h-12 my-2 rounded-md overflow-hidden'>
                <div className='absolute flex h-12 w-12 z-10 justify-center items-center text-lg'><TbLocationFilled /></div>
                <input className='relative h-full w-full hover:bg-[#E2E8F0] text-md pl-12 pr-4 rounded-md border' id="pickup-location" type="text" autoComplete='pickup-location' placeholder='Enter Pickup Location' />
              </div>
              <div className='h-12 my-2 rounded-md overflow-hidden'>
                <div className='absolute flex h-12 w-12 z-10 justify-center items-center text-lg'><TbLocationFilled /></div>
                <input className='relative h-full w-full hover:bg-[#E2E8F0] text-md pl-12 pr-4 rounded-md border' id="pickup-location" type="text" autoComplete='pickup-location' placeholder='Enter Destination' />
              </div>
            </div>
            <div className='flex flex-col'>
              <button className='h-10 justify-center font-semibold text-white rounded-md bg-black px-4' type='submit'>Request now</button>
              <button className='h-10 justify-center font-semibold text-black rounded-md px-4' type='submit'>Schedule for later</button>
            </div>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>

    // <Tabs onChange={(index) => TabChange(index)}>
    //   <TabList>
    //     <Tab height={24} width={24} _selected={{ color: 'black', bg: 'blackAlpha.200', borderBottomColor: 'black' }} >
    //       <Center>
    //         <Flex boxSize={'full'} alignItems={'center'} flexDirection='column'>
    //           <AiFillCar size={'22'} />
    //           <Text pt={1.5}>Ride</Text>
    //         </Flex>
    //       </Center>
    //     </Tab>

    //     <Tab height={24} width={24} _selected={{ color: 'black', bg: 'blackAlpha.200', borderBottomColor: 'black' }} >
    //       <Center>
    //         <Flex boxSize={'full'} alignItems={'center'} flexDirection='column'>
    //           <FiPackage size={'22'} />
    //           <Text pt={1.5}>Deliver</Text>
    //         </Flex>
    //       </Center>
    //     </Tab>

    //     <Tab height={24} width={24} _selected={{ color: 'black', bg: 'blackAlpha.200', borderBottomColor: 'black' }}>
    //       <Center>
    //         <Flex boxSize={'full'} alignItems={'center'} flexDirection='column'>
    //           <GiCarWheel size={'22'} />
    //           <Text pt={1.5}>Rent</Text>
    //         </Flex>
    //       </Center>
    //     </Tab>

    //   </TabList>
    //   <TabPanels>
    //     <TabPanel>
    //       <Flex direction={'column'}>
    //         <Text fontSize={'3xl'} as='b'>Request a ride now</Text>
    //         <Box py={8}>
    //           <InputGroup position={'relative'} size={'lg'} my={2} border={'none'}>
    //             <InputLeftElement pointerEvents='none' children={<TbLocationFilled color='gray.300' />} />
    //             <Input variant='filled' placeholder='Enter Pickup Location' />
    //           </InputGroup>
    //           <InputGroup position={'relative'} size={'lg'} my={2} border={'none'}>
    //             <InputLeftElement pointerEvents='none' children={<HiLocationMarker color='gray.300' />} />
    //             <Input variant='filled' placeholder='Enter Destination' />
    //           </InputGroup>
    //         </Box>
    //         <VStack spacing={2}>
    //           <Button width={'full'} variant='primary'>Request now</Button>
    //           <Button width={'full'} variant='secondary'>Schedule for later</Button>
    //         </VStack>
    //       </Flex>
    //     </TabPanel>
    //     <TabPanel>
    //       <Flex direction={'column'}>
    //         <Text fontSize={'3xl'} as='b'>Request a ride now</Text>
    //         <Box py={8}>
    //           <InputGroup position={'relative'} size={'lg'} my={2} border={'none'}>
    //             <InputLeftElement pointerEvents='none' children={<FiPackage color='gray.300' />} />
    //             <Input variant='filled' placeholder='Enter Pickup Location' />
    //           </InputGroup>
    //           <InputGroup position={'relative'} size={'lg'} my={2} border={'none'}>
    //             {/* <InputLeftElement pointerEvents='none' children={<FaTruckLoading color='gray.300' style={{'-webkit-transform': 'scaleX(-1)', transform: 'scaleX(-1)'}} />} /> */}
    //             <InputLeftElement pointerEvents='none' children={<RiTruckFill color='gray.300' />} />
    //             <Input variant='filled' placeholder='Enter Destination' />
    //           </InputGroup>
    //         </Box>
    //         <VStack spacing={2}>
    //           <Button width={'full'} variant='primary'>Request now</Button>
    //           <Button width={'full'} variant='secondary'>Schedule for later</Button>
    //         </VStack>
    //       </Flex>
    //     </TabPanel>
    //     <TabPanel>
    //       <Flex direction={'column'}>
    //         <Text fontSize={'3xl'} as='b'>Request a ride now</Text>
    //         <Box py={8}>
    //           <InputGroup position={'relative'} size={'lg'} my={2} border={'none'}>
    //             <InputLeftElement pointerEvents='none' children={<TbLocationFilled color='gray.300' />} />
    //             <Input variant='filled' placeholder='Enter Pickup Location' />
    //           </InputGroup>
    //           <InputGroup position={'relative'} size={'lg'} my={2} border={'none'}>
    //             <InputLeftElement pointerEvents='none' children={<HiLocationMarker color='gray.300' />} />
    //             <Input variant='filled' placeholder='Enter Destination' />
    //           </InputGroup>
    //         </Box>
    //         <VStack spacing={2}>
    //           <Button width={'full'} variant='primary'>Request now</Button>
    //           <Button width={'full'} variant='secondary'>Schedule for later</Button>
    //         </VStack>
    //       </Flex>
    //     </TabPanel>
    //   </TabPanels>
    // </Tabs>
  )
}