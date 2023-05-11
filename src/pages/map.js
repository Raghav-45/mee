import { useEffect, useState } from 'react'
import Script from 'next/script'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Text, Center, Box, Input, Button, Stack, VStack, HStack, InputGroup, InputLeftElement, useToast } from '@chakra-ui/react'
import { AiFillCar } from 'react-icons/ai'
import { FiPackage } from 'react-icons/fi'
import { GiCarWheel } from 'react-icons/gi'

import { HiLocationMarker } from 'react-icons/hi'
import { TbLocationFilled } from 'react-icons/tb'
import { RiTruckFill } from 'react-icons/ri'
import { FaTruckLoading } from 'react-icons/fa'
import { TbTruckLoading } from 'react-icons/tb'

import { Toast } from "../../components/Toast";
import { supabase } from '../../lib/supabaseClient'
import { useAuth } from '../../contexts/AuthContext'

import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

export default function Home() {
  const toast = useToast()
  const { currentUser } = useAuth()

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyB0f0o77WzVWMIXX69u0oJL8zyKPKSsAEA',
  })

  const center = { lat: 28.659051, lng: 77.113777 }
  const mapOptions = {zoomControl: false, streetViewControl: false, mapTypeControl: false, fullscreenControl: false}

  const [pickupLoc, setPickupLoc] = useState('')
  const [destinationLoc, setDestinationLoc] = useState('')

  if (!isLoaded) {
    return <Box>Loading...</Box>
  }

  return (
    <Box position={'relative'} h={'100vh'} w={'100vw'}>
      <Box position={'absolute'} h={'100%'} w={'100%'}>
        <GoogleMap center={center} zoom={17} mapContainerStyle={{width: '100%', height: '100%'}} options={mapOptions}>
          <Marker position={center} />
        </GoogleMap>
      </Box>
    </Box>
  )
}