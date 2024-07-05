'use client'

import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { SiLinkedin, SiMessenger } from 'react-icons/si'
import { Box, Button, Center, Stack, Text } from '@chakra-ui/react'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom'
export default function SosialMediaIcon() {
  return (
    <Center p={8}>
      <Stack className='!flex !flex-col !gap-3' spacing={2} align={'center'} maxW={'md'} w={'full'}>
        {/* Facebook */}
        <Button w={'full'} className='bg-white !rounded-2xl' colorScheme={'whatsap'} leftIcon={<WhatsAppIcon className='text-green-700' />}>
          <Center>
           <Link target="_blank" to="https://web.whatsapp.com/"> <Text className='text-black'>Share with WhatsApp</Text></Link> 
          </Center>
        </Button>

        {/* Google */}
        <Button w={'full'} className='bg-white !rounded-2xl' variant={'outline'} leftIcon={<FcGoogle />}>
          <Center>
           <Link target="_blank" to="https://www.google.com/search?q=google&oq=google&gs_lcrp=EgZjaHJvbWUqEAgAEAAYgwEY4wIYsQMYgAQyEAgAEAAYgwEY4wIYsQMYgAQyEwgBEC4YgwEYxwEYsQMY0QMYgAQyDQgCEAAYgwEYsQMYgAQyBggDEEUYOzIKCAQQABixAxiABDINCAUQABiDARixAxiABDIKCAYQABixAxiABDIKCAcQABixAxiABDIKCAgQABixAxiABDINCAkQABiDARixAxiABNIBCTM2MThqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8"><Text className='text-black'>Sign in with Google</Text></Link> 
          </Center>
        </Button>

        {/* LinkedIn */}
        <Button w={'full'} className='bg-white !rounded-2xl' colorScheme={'instagram'} leftIcon={<InstagramIcon className='!bg-gradient-to-r !from-blue-600 !via-green-500 !to-indigo-400 !inline-block text-orange-900 !bg-clip-text'/>}>
          <Center>
           <Link target="_blank" to="https://www.instagram.com/"><Text className='text-black'>Share to Instagram</Text></Link> 
          </Center>
        </Button>

        {/* Messenger */}
       
      </Stack>
    </Center>
  )
}