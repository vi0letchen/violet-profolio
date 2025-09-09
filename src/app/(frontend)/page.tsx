import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'
import ContentService from '@/data-layer/ContentService'
import { Media } from '@/payload-types'

export default async function HomePage() {
  const homeInfo = await ContentService.getAboutMe()
  console.log(homeInfo)

  return (
    <div className="home">
      <h1>{homeInfo?.Name}</h1>
      <Image
        src={(homeInfo?.['Profile Picture'] as Media).url || ''}
        alt={(homeInfo?.['Profile Picture'] as Media).alt || 'Profile Picture'}
        width={200}
        height={200}
      />
      <h2>About Me</h2>
      <div>{homeInfo?.['About Me']}</div>
      <h2>Contact Details</h2>
      <div>
        <b>Email: </b>
        {homeInfo?.['Email Address']}</div>
      <div>
        <b>Phone Number: </b> 
        {homeInfo?.['Phone Number']}</div>
    </div>
  )
}
