import { payloadInstance } from './Payload'
import {Home} from '@/payload-types'

export default class ContentService{
     public static async getAboutMe(): Promise<Home>{
          const aboutMe = await payloadInstance.findGlobal({
               slug: "home",
          })
          return aboutMe
     }
}
