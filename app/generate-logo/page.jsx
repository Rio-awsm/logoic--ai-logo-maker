"use client"

import { UserDetailsContext } from '@/context/UserDetailsContext'
import React from 'react'

const GenerateLogo = () => {
  const {userDetail, setUserDetail} = React.useContext(UserDetailsContext)
  console.log(userDetail);
  
  return (
    <div>
      
    </div>
  )
}

export default GenerateLogo
