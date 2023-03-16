import { useToast, Button, Wrap, WrapItem } from '@chakra-ui/react'

import React from 'react'

export default function LoginPage() {

  function ToastExample() {
    const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: 'Account created.',
            description: "We've created account for you.",
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
        }
      >
        Show Login Success Toast
      </Button>
    )
  }

  function ToastStatusExample() {
    const toast = useToast()
    const statuses = ['success', 'error', 'warning', 'info']
  
    return (
      <Wrap>
        {statuses.map((status, i) => (
          <WrapItem key={i}>
            <Button
              onClick={() =>
                toast({
                  title: `${status} toast`,
                  status: status,
                  isClosable: true,
                })
              }
            >
              Show {status} toast
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    )
  }
  return (
    <>
      <ToastStatusExample />
      <ToastExample />
    </>
  )
}