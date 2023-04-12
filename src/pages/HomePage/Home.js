import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree,homeObjFour } from './Data'
import {InfoSection, Pricing} from '../../components'
const Home = () => {
  return (
   <>
    <InfoSection  {...homeObjOne}/>
    <InfoSection  {...homeObjTwo}/>
    <InfoSection  {...homeObjThree}/>
    <Pricing />
   </>
  )
}

export default Home
