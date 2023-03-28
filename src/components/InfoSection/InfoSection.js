import React from 'react'
import { Link } from  'react-router-dom'
import { 
  InfoSec, 
  InfoColumn,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle
} from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'

const InfoSection = ({
  primary,
  lightBg, 
  imgStart, 
  ligthTopLine, 
  lightTextDesc,
  topLine,
  lightText,
  headline,
  buttonLabel,
  description
}) => {
  return (
    <>
        <InfoSec 
        lightBg= {lightBg}
        >
          <Container>
            <InfoRow imgStart= {imgStart}>
              <InfoColumn>
                <TextWrapper>
                  <TopLine ligthTopLine= {ligthTopLine} > {topLine} </TopLine>
                  <Heading lightText= {lightText} > {headline} </Heading>
                  <SubTitle lightTextDesc= {lightTextDesc} > {description} </SubTitle>
                  <Link to='/sign-up'>
                    <Button big fontBig primary= {primary}>
                      {buttonLabel}
                    </Button>
                  </Link>                  
                </TextWrapper>
              </InfoColumn>
            </InfoRow>
          </Container>
        </InfoSec>
    </>
  )
}

export default InfoSection
