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
  font-family: 'Open Sans', sans-serif;
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
font-family: 'Open Sans', sans-serif;
letter-spacing: 1px;
`

const IconScroll = styled.div`

width: 15px;
height: 27px;
margin-left: -10px;
top: 60%;
margin-top: -35px;
box-shadow: inset 0 0 0 1px black;
border-radius: 25px;
position: absolute;
left: 50%;

&:before {
  content: '';
  width: 2px;
  height: 2px;
box-shadow: inset 0 0 0 1px black;
  margin-left: -1px;
  top: 8px;
  border-radius: 4px;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: scroll;
  position: absolute;
  left: 50%;
}

@keyframes scroll {
  0% {  opacity: 1; }
  100% {
    opacity: 0;
    transform: translateY(16px);
  }
}

`

export default class Moove extends React.Component {
  render () {
    return (
      <Page>
        <Intro>
          <Copy>Moove</Copy>
          <IconScroll />
        </Intro>

        <Outro>
          <AboutContainer>
            <CopyP>This is my credited project for the first year of my college course. The brief was to create a corporate identity for a company of my choosing or to create a company of my own. After choosing the latter, I envisaged a milkshake company called ‘On the Moove’, aimed at providing and inspiring a healthy alternative to the fast food industry, located at motorway service stations.</CopyP>
            <CopyP>The cows within the logo are to emphasise the products natural foundation and ethos. The juxtaposing of the cows reflects the opposing directions of UK motorways; utilising the rural imagery of farm animals stacked high.</CopyP>
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
