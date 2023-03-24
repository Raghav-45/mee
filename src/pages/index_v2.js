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
    <div className='flex flex-col'>
      <h1 className='text-5xl font-semibold h-full w-full py-12'>MEV</h1>
      <div className='flex flex-row gap-3'>
        <div className='relative flex flex-col flex-1 h-36 w-full justify-center items-center text-3xl bg-black/10 rounded-lg'>
          <img className='absolute bottom-12 h-auto w-full aspect-[255/144]' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_2730,h_1540/f_auto,q_auto/products/carousel/Taxi_Yellow.png' />
          <p className='absolute text-xl font-semibold w-full pl-3 bottom-2 text-left'>Get a Ride</p>
        </div>
        <div className='relative flex flex-col flex-1 h-36 w-full justify-center items-center text-3xl bg-black/10 rounded-lg'>
          <img className='absolute top-4 h-24' src='/package.png' />
          <p className='absolute text-xl font-semibold w-full pl-3 bottom-2 text-left'>Get Delivery</p>
        </div>
      </div>
    </div>
  )
}