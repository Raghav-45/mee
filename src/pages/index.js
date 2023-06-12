import { chakra, Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Text, Center, Box, Input, Button, Stack, VStack, HStack, InputGroup, InputLeftElement, Spinner, Container } from '@chakra-ui/react'
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
import { supabase } from '../../lib/supabaseClient'
import { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useRouter } from 'next/router'

import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";
import { OnBoarding } from '../../components/OnBoarding'

export default function Home() {
  const toast = useToast()
  const { currentUser } = useAuth()
  const router = useRouter()

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyB0f0o77WzVWMIXX69u0oJL8zyKPKSsAEA',
    libraries: ['places'],
  })

  const center = { lat: 28.659051, lng: 77.113777 }
  const mapOptions = {zoomControl: false, streetViewControl: false, mapTypeControl: false, fullscreenControl: false}
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')

  const [showOnBoarding, setShowOnBoarding] = useState(false)

  useEffect(() => {
    if (currentUser == null) {
      setShowOnBoarding(true)
    } else {
      setShowOnBoarding(false)
    }
  }, [currentUser])

  const [pickupLoc, setPickupLoc] = useState('')
  const [destinationLoc, setDestinationLoc] = useState('')

  const [myRide, setMyRide] = useState()

  const originInputRef = useRef()
  const destinationInputRef = useRef()
  const [isCalculatingRoute, setIsCalculatingRoute] = useState(false)

  const showLoginAlert = () => {
    toast({
      title: 'Warning!',
      description: "Please Login First to Ride",
      status: 'warning',
      duration: 3000,
      isClosable: true,
    })
  }

  function TabChange(index) {
    index == 0 && toast({
      title: 'Excited!',
      description: "Riding is now avaliable",
      status: 'success',
      duration: 3000,
      isClosable: true,
      // variant:"information",
    })

    index == 2 && toast({
      title: 'Info',
      description: "Sorry, Renting service is currently not avaliable",
      status: 'warning',
      duration: 3000,
      isClosable: true,
      variant:"information",
    })
  }

  async function calculateRoute() {
    if (originInputRef.current.value === '' || destinationInputRef.current.value === '') { return }
    setIsCalculatingRoute(true)
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originInputRef.current.value,
      destination: destinationInputRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)

    console.log(results)

    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
    setIsCalculatingRoute(false)
  }

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originInputRef.current.value = ''
    destinationInputRef.current.value = ''
  }

  const getRandomOnlineDriver = async () => {
    const { data, error } = await supabase.from('online_driver').select('*')
    return data
  }

  const registerRide = async (startLoc, endLoc) => {
    const d = await getRandomOnlineDriver()
    const mydriver = d[0]
    console.log({pickup_loc: startLoc, drop_loc: endLoc, fare: 10, driver_id: mydriver.id})
    const { data, error } = await supabase.from('waiting_rides').insert({pickup_loc: startLoc, drop_loc: endLoc, fare: 10, person_id: currentUser.id, driver_id: mydriver.id}).select().maybeSingle()
    return data
  }

  const BookRide = async (startLoc, endLoc) => {
    registerRide(startLoc, endLoc).then((e) => setMyRide(e))
  }

  // useEffect(() => {
  //   TabChange(0)
  // }, [])

  useEffect(() => {
    const sub = supabase.channel('any')
      .on('postgres_changes', myRide ? { event: 'UPDATE', schema: 'public', table: 'waiting_rides', filter: `id=eq.${myRide.id}` } : { event: 'INSERT', schema: 'public', table: 'waiting_rides' }, payload => {
        console.log('Change received!', payload)
        setMyRide(payload.new)

        // if (payload.new.is_accepted != true) {
        //   console.log('i can get this ride', payload)
        // }

        // watchForRealtimeChanges && setRideQueue(current => [...current, payload.new])
      }).subscribe()
    return () => {
      supabase.removeChannel(sub)
    }
  }, [myRide])

  if (!isLoaded) {
    return <Box>Loading...</Box>
  }

  return (
    showOnBoarding ? <OnBoarding onTrynow={() => {setShowOnBoarding(false); !currentUser && router.replace('/register');}} />
    :
    <Box>
      <Tabs onChange={(index) => TabChange(index)} defaultIndex={0}>
        <TabList>
          <Tab height={24} width={24} _selected={{ color: 'black', bg: 'blackAlpha.200', borderBottomColor: 'black' }}>
            <Center>
              <Flex boxSize={'full'} alignItems={'center'} flexDirection='column'>
                <AiFillCar size={'22'} />
                <Text pt={1.5}>Ride</Text>
              </Flex>
            </Center>
          </Tab>
          <Tab height={24} width={24} _selected={{ color: 'black', bg: 'blackAlpha.200', borderBottomColor: 'black' }}>
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
                {/* Auto Complete Google Maps */}
                <Autocomplete onPlaceChanged={() => {destinationInputRef.current.value != '' && console.log('Calculating Route'); calculateRoute();}}>
                  <InputGroup position={'relative'} size={'lg'} my={2} border={'none'}>
                    <InputLeftElement pointerEvents='none' children={<TbLocationFilled color='gray.300' />} />
                    <Input ref={originInputRef} variant='filled' background={'#F6F6F6'} placeholder='Enter Pickup Location' onChange={(e) => {setPickupLoc(e.target.value);}} />
                  </InputGroup>
                </Autocomplete>
                {/* Auto Complete Google Maps */}
                <Autocomplete onPlaceChanged={() => {originInputRef.current.value != '' && console.log('Calculating Route'); calculateRoute();}}>
                  <InputGroup position={'relative'} size={'lg'} my={2} border={'none'}>
                    <InputLeftElement pointerEvents='none' children={<HiLocationMarker color='gray.300' />} />
                    <Input ref={destinationInputRef} variant='filled' background={'#F6F6F6'} placeholder='Enter Destination' onChange={(e) => {setDestinationLoc(e.target.value);}} />
                  </InputGroup>
                </Autocomplete>
              </Box>
              <VStack spacing={2} mb={2}>
                <Button isLoading={isCalculatingRoute} loadingText='Calculating Route...' spinnerPlacement='end' width={'full'} variant='primary' onClick={() => !currentUser ? showLoginAlert() : BookRide(originInputRef.current.value, destinationInputRef.current.value)}>Request now (Distance: {distance} Time: {duration})</Button>                
                <Button width={'full'} variant='secondary'>Schedule for later</Button>
                {/* {distance != '' && <Button size={'sm'} rounded='full' variant='primary'>Distance: {distance} Time: {duration}</Button>} */}
              </VStack>

              <Box position={'relative'} left={0} top={0} h={'240px'} w={'100%'} overflow={'hidden'} rounded={'lg'}>
                <Box position={'absolute'} left={0} top={0} h={'100%'} w={'100%'}>
                  <GoogleMap center={center} zoom={17} mapContainerStyle={{width: '100%', height: '100%'}} options={mapOptions}>
                    {/* <Marker position={center} /> */}
                    {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
                  </GoogleMap>
                </Box>
              </Box>
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

      {myRide && myRide.is_accepted != true && <Box p={4} textAlign={'center'} textColor={'blue.400'}>
        <HStack display={'inline-flex'}>
          <Spinner size={'sm'}></Spinner>
          <Text>Searching for Driver</Text>
        </HStack>
      </Box>}

      {myRide && myRide.is_accepted == true && <Box p={4} textColor={'blue.400'}>
        <VStack>
          <Text>Driver Alloted</Text>
          <Container textColor={'gray.500'} maxW='container.xs' overflowX='auto' py={2}>
            <chakra.pre maxW={'sm'} p={2}>
              <pre>{JSON.stringify(myRide, null, 1)}</pre>
            </chakra.pre>
          </Container>
        </VStack>
      </Box>}

      {/* <chakra.pre p={4}>
        {myRide && <pre>{JSON.stringify(myRide, null, 2)}</pre>}
      </chakra.pre> */}
    </Box>
  )
}