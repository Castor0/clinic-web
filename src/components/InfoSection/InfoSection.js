import React from 'react'
import { InfoSec, InfoColumn,InfoRow,TextWrapper } from './InfoSection.elements'
import { Container } from '../../globalStyles'

const InfoSection = ({lightBg, imgStart}) => {
  return (
    <>
        <InfoSec 
        lightBg={lightBg}
        >
          <Container>
            <InfoRow imgStart= {imgStart}>
              <InfoColumn>
                <TextWrapper>
                  <TopLine></TopLine>
                  Hello There
                </TextWrapper>
              </InfoColumn>
            </InfoRow>
          </Container>
        </InfoSec>
    </>
  )
}

export default InfoSection
