import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Image1 from './../images/Moove1.png'
import Image2 from './../images/Moove2.jpg'
import Image3 from './../images/Moove3.jpg'
import Image4 from './../images/Moove4.jpg'
import Image5 from './../images/Moove5.png'
import Image6 from './../images/Moove6.jpg'
import Back from './../images/back.png'

const Page = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 616px ) {}
`

const ImageContainer = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
`

const Intro = styled.section`
  height: 100%;
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;

  background: #7EC3ED;
`

const Outro = styled.section`
height: 100%;
width: 100%;
background: white;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
align-content: center;
`

const Image = styled.img`
  height: 70%;
  width: 100%;
  object-fit: contain;
`

const Copy = styled.h3`
  font-family: 'Open Sans Condensed', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  h3 {
    margin: 0;
    margin-bottom: 1em
  }
`

const BackIcon = styled.img`
  height: 100px;
`
const AboutContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 80%;
  width: 80%;
  padding: 1em 2em;
  padding-top: 0;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  border-bottom: 3px solid #7EC3ED;
`

const CopyP = styled.p`
font-family: 'Open Sans Condensed', sans-serif;
text-transform: uppercase;
letter-spacing: 1px;
`

export default class Moove extends React.Component {
  render () {
    return (
      <Page>
        <Intro>
          <Copy>Moove</Copy>
        </Intro>

        <Outro>
          <AboutContainer>
            <CopyP>This was my credited project for the first year of my college course. The brief was to create a corporate identity for a company of my choosing or to create one of my own. After choosing the latter, I envisaged the company ‘On the Moove’. A milkshake company aimed at providing a healthy alternative to fast food restaurants situated at motorway service stations.</CopyP>
            <CopyP>The cows within the logo were to demonstrate that the products had a natural background. The direction of the cows was to sinuate the two directions that flow on motorways, working with the old imagery of farm animals stacked high, to create a playful appearance.</CopyP>
          </AboutContainer>
        </Outro>

        <ImageContainer>
          <Image src={Image1} />
        </ImageContainer>

        <ImageContainer>
          <Image src={Image2} />
        </ImageContainer>

        <ImageContainer>
          <Image src={Image3} />
        </ImageContainer>

        <ImageContainer>
          <Image src={Image4} />
        </ImageContainer>

        <ImageContainer>
          <Image src={Image5} />
        </ImageContainer>

        <ImageContainer>
          <Image src={Image6} />
        </ImageContainer>

        <Outro>
          <Link to='/'>
            <BackIcon src={Back} />
          </Link>
        </Outro>
      </Page>
    )
  }
}
