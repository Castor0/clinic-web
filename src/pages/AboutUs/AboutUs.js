import React from 'react'
import {  homeObjTwo, homeObjThree,homeObjFour } from './Data'
import {InfoSection, Pricing} from '../../components'
const Home = () => {
  return (
   <>
    <InfoSection  {...homeObjTwo}/>
    <InfoSection  {...homeObjThree}/>
    <Pricing />
   </>
  )
}

export default Home
