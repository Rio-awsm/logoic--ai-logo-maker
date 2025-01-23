import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Header = () => {
  return (
    <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-md'>
      <Image src="/logo.svg" alt='logo' width={100} height={50} />
      <Button>Get Started</Button>
    </div>
  )
}

export default Header
