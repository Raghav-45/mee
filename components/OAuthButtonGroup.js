import { Button, Center, Stack, Text } from '@chakra-ui/react'
import { GitHubIcon, GoogleIcon, TwitterIcon, AppleIcon } from './ProviderIcons'
import { useAuth } from '../contexts/AuthContext'

const providers = [
  {
    name: 'Google',
    icon: <GoogleIcon boxSize="5" />,
  },
  {
    name: 'Apple',
    icon: <AppleIcon boxSize="5" />,
  },
  {
    name: 'Twitter',
    icon: <TwitterIcon boxSize="5" />,
  },
]


export const OAuthButtonGroup = () => {
  const { signInWithGoogle} = useAuth()
  return (
    <Center>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
        
        {/* Google */}
        <Button w={'full'} variant={'outline'} leftIcon={<GoogleIcon boxSize="4" />}>
          <Center>
            <Text>Continue with Google</Text>
          </Center>
        </Button>
        
        {/* Apple */}
        <Button w={'full'} variant={'outline'} leftIcon={<AppleIcon boxSize="4" />}>
          <Center>
            <Text>Continue with Apple</Text>
          </Center>
        </Button>

        {/* Twitter */}
        <Button w={'full'} variant={'outline'} leftIcon={<TwitterIcon boxSize="4" />}>
          <Center>
            <Text>Continue with Twitter</Text>
          </Center>
        </Button>
      </Stack>
    </Center>
  )
}