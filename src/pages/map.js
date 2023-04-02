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
import Map from "mapmyindia-react"

export default function Home() {
  const toast = useToast()
  const { currentUser } = useAuth()

  const [pickupLoc, setPickupLoc] = useState('')
  const [destinationLoc, setDestinationLoc] = useState('')

  return (
    <Box>
      <Script src="https://apis.mapmyindia.com/advancedmaps/v1/06eb2afcbe49d1fdfe37e89dbe823094/map_load?v=1.3" />
      <Map
        markers={[
          {
            // position: [18.5314, 73.845],
            position: [28.6575633,77.1120903],
            draggable: true,
            title: "Marker title",
            onClick: e => {
              console.log("clicked ");
            },
            onDragend: e => {
              console.log("dragged");
            }
          }
        ]}
      />
    </Box>
  )
}