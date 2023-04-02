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
// import Map from "mapmyindia-react"

// const map = new mappls.Map('map', {center:{lat:28.612964,lng:77.229463} });

export default function Home() {
  const toast = useToast()
  const { currentUser } = useAuth()
  const [isMapLoaded, setIsMapLoaded] = useState(false)

  const [pickupLoc, setPickupLoc] = useState('')
  const [destinationLoc, setDestinationLoc] = useState('')
  const MapSettings = {
    zoomControl: false,
    zoom: 16,
    hybrid: true,
  }

  var map
  function initMap() {
    map = new mappls.Map('map', {center:[28.638698386592438,77.27604556863412]})
  }

  // useEffect(() => {
  //   if (isMapLoaded) {
  //     const m = new mappls.Map('map', {center:{lat:28.612964,lng:77.229463} })
  //     setMap(m)
  //   }
  // }, [isMapLoaded])
  

  return (
    <Box>
      {/* <Script src="https://apis.mappls.com/advancedmaps/v1/06eb2afcbe49d1fdfe37e89dbe823094/map_load?v=3.0&layer=vector" onLoad={() => setMap(new mappls.Map('map', {center:{lat:28.612964,lng:77.229463} }))} /> */}
      <Script src="https://apis.mappls.com/advancedmaps/api/06eb2afcbe49d1fdfe37e89dbe823094/map_sdk?layer=vector&v=3.0" onLoad={() => initMap()} />
      {/* {isMapLoaded && <Map
        center={[28.659051, 77.113777]}
        {...MapSettings}
        markers={[
          {
            position: [28.667936, 77.112228],
            draggable: true,
            title: "Destination",
            onClick: e => {console.log("clicked")},
            onDragend: e => {console.log("dragged")}
          },
          {
            position: [28.659051, 77.113777],
            draggable: true,
            title: "Pickup",
            onClick: e => {console.log("clicked")},
            onDragend: e => {console.log("dragged")}
          }
        ]}
      />} */}

      {/* <Box id="map" height={'90vh'} width={'100%'}></Box> */}

    <div id="map" style={{margin: 0, padding: 0, width: "100%", height: "100vh",}}></div>
    </Box>
  )
}