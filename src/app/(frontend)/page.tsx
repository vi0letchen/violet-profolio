import Image from 'next/image'
import React from 'react'

import ContentService from '@/data-layer/ContentService'
import { Media } from '@/payload-types'

export default async function HomePage() {
  const homeInfo = await ContentService.getAboutMe()
  console.log(homeInfo)

  return (
    <div className='home'>
      <div className="page">
        <h1>{homeInfo?.Name}</h1>
        <p>About Me</p>
        <div className="flex flex-row">
          <div>{homeInfo?.['About Me']}</div>
        </div>
          <div className="rounded-lg shadow-lg float-right ml-4 mb-2">
            <Image
              src={(homeInfo?.['Profile Picture'] as Media).url || ''}
              alt={(homeInfo?.['Profile Picture'] as Media).alt || 'Profile Picture'}
              width={200}
              height={200}
            />
          </div>
        <h2>Contact Details</h2>
        <div>
          <b>Email: </b>
          {homeInfo?.['Email Address']}
        </div>
        <div>
          <b>Phone Number: </b>
          {homeInfo?.['Phone Number']}
        </div>
      </div>
    </div>
  )
}
