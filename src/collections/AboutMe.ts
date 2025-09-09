import type { GlobalConfig } from 'payload'

export const Home: GlobalConfig = {
  slug: 'home',
  fields: [
    {
      name: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'About Me',
      type: 'textarea',
      required: true,
    },
    {
      name: 'Profile Picture',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'Email Address',
      type: 'textarea',
      required: true,
    },
     {
      name: 'Phone Number',
      type: 'textarea',
      required: true,
    },
  ],
}
