import { chakra, Box, Button, Checkbox, Container, Divider, FormControl, FormLabel, Heading, HStack, Input, Stack, Text, Center, useToast, Avatar, VStack, Flex, Badge, SimpleGrid, AspectRatio } from '@chakra-ui/react'

import { Icon } from '@chakra-ui/react'
import { HiLocationMarker } from 'react-icons/hi'
import { TbLocationFilled } from 'react-icons/tb'
import { AiFillStar } from 'react-icons/ai';

import { Logo } from '../../../components/Logo'
import { OAuthButtonGroup } from '../../../components/OAuthButtonGroup'
import { PasswordField } from '../../../components/PasswordField'
import { useRouter } from 'next/router'

import { useAuth } from '../../../contexts/AuthContext'
import { useState, useEffect, useRef } from 'react'
import useMounted from '../../../hooks/useMounted'
import { supabase } from './../../../lib/supabaseClient'

import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";

export default function RideInfoPage() {
  const router = useRouter()
  const { currentUser, myCurrentRide } = useAuth()
  const toast = useToast()
  const mounted = useMounted()

  const [myRide, setMyRide] = useState()

  const mapStyleDark = [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#263c3f" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6b9a76" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9ca5b3" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#746855" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1f2835" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#f3d19c" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#2f3948" }],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#17263c" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#515c6d" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#17263c" }],
    },
  ]

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyB0f0o77WzVWMIXX69u0oJL8zyKPKSsAEA',
    libraries: ['places'],
  })

  const center = { lat: 28.659051, lng: 77.113777 }
  const mapOptions = {zoomControl: false, streetViewControl: false, mapTypeControl: false, fullscreenControl: false, styles: mapStyleDark}

  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')

  async function calculateRoute(start, end) {
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)

    console.log(results)

    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }

  const getMyRide = async () => {
    const { data, error } = await supabase
                                    .from('waiting_rides')
                                    .select()
                                    .match({id: myCurrentRide.id})
                                    // .rangeLte('booked_at', '[2023-11-12 14:00:00.000000+00, 2023-12-12 16:00:00.000000+00)')
    return data
  }

  useEffect(() => {
    calculateRoute(myCurrentRide.pickup_loc, myCurrentRide.drop_loc)
  }, [myCurrentRide])
  

  // useEffect(() => {
  //   console.log('gg', myCurrentRide)
  //   if ( currentUser ) {
  //     getMyRide().then((e) => setMyRide(e))
  //   }
  // }, [currentUser])
  

  if (!isLoaded) {return (<Box>Loading...</Box>)}

  return (
    <Container maxW='container.lg' overflowX='auto' py={6}>
      {myCurrentRide && <Box pt={5} textAlign={'center'}>
        {/* <Text textAlign={'left'} fontSize={'xl'}>Pickup Location - {'Raghubir Nagar'} </Text>
        <Text textAlign={'left'} fontSize={'xl'}>Drop Location - {'Tegore Garden'} </Text>
        <Text textAlign={'left'} fontSize={'xl'}>person_id - {'person uuid'} </Text>
        <Text textAlign={'left'} fontSize={'xl'}>driver_id - {'driver uuid'} </Text> */}
        {/* <Text textAlign={'left'} fontSize={'xl'}>Fare - {'Rs. 10'} </Text> */}

        {/* {myRide && <Box p={4} textColor={'blue.400'}>
          <VStack>
            <Text>Driver Alloted</Text>
            <Container textColor={'gray.500'} maxW='container.xs' overflowX='auto' py={2}>
              <chakra.pre maxW={'sm'} p={2}>
                <pre>{JSON.stringify(myRide, null, 1)}</pre>
              </chakra.pre>
            </Container>
          </VStack>
        </Box>} */}

        <Avatar my={3} size='xl' bg='blackAlpha.300' name={`${myCurrentRide.driver_id}`} src='https://bit.ly/code-beast' />
        <Heading as='h3' size='xl' style={{wordSpacing: '-5px'}}>{myCurrentRide.driver_id}</Heading>
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

        <Box mt={24}>
          <AspectRatio position={'relative'} left={0} top={0} overflow={'hidden'} rounded={'xl'} ratio={2/1} >
            <Box position={'absolute'} left={0} top={0} h={'100%'} w={'100%'}>
              <GoogleMap center={center} zoom={17} mapContainerStyle={{width: '100%', height: '100%'}} options={mapOptions}>
                {/* <Marker position={center} /> */}
                {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
              </GoogleMap>
            </Box>
          </AspectRatio>
        </Box>
      </Box>}
    </Container>
  )
}