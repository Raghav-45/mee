import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Text, Center, Box, Input, Button, Stack, VStack, HStack } from '@chakra-ui/react'
import { AiFillCar } from 'react-icons/ai'
import { FiPackage } from 'react-icons/fi'
import { GiCarWheel } from 'react-icons/gi'

export default function Home() {
  return (
    <Tabs>
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

        <Tab height={24} width={24} _selected={{ color: 'black', bg: 'blackAlpha.200', borderBottomColor: 'black' }}  isDisabled>
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
              <Input position={'relative'} size={'lg'} border={'none'} variant='filled' placeholder='Enter Pickup Location' />
              <Input position={'relative'} size={'lg'} my={2} border={'none'} variant='filled' placeholder='Enter Destination' />
              {/* <Box position='absolute' top={'33px'} bottom={'33px'} width={'1px'} bg={'#000'} _before={{ border: '1px', height: '10px', width: '10px', content: '""', display: 'block', position: 'absolute', bottom: '0px', left: '0px' }} _after={{ border: '1px', height: '10px', width: '10px', content: '""', display: 'block', position: 'absolute', top: '0px', left: '0px' }}></Box> */}
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
              <Input position={'relative'} size={'lg'} border={'none'} variant='filled' placeholder='Enter Pickup Location' />
              <Input position={'relative'} size={'lg'} my={2} border={'none'} variant='filled' placeholder='Enter Destination' />
              {/* <Box position='absolute' top={'33px'} bottom={'33px'} width={'1px'} bg={'#000'} _before={{ border: '1px', height: '10px', width: '10px', content: '""', display: 'block', position: 'absolute', bottom: '0px', left: '0px' }} _after={{ border: '1px', height: '10px', width: '10px', content: '""', display: 'block', position: 'absolute', top: '0px', left: '0px' }}></Box> */}
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
              <Input position={'relative'} size={'lg'} border={'none'} variant='filled' placeholder='Enter Pickup Location' />
              <Input position={'relative'} size={'lg'} my={2} border={'none'} variant='filled' placeholder='Enter Destination' />
              {/* <Box position='absolute' top={'33px'} bottom={'33px'} width={'1px'} bg={'#000'} _before={{ border: '1px', height: '10px', width: '10px', content: '""', display: 'block', position: 'absolute', bottom: '0px', left: '0px' }} _after={{ border: '1px', height: '10px', width: '10px', content: '""', display: 'block', position: 'absolute', top: '0px', left: '0px' }}></Box> */}
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