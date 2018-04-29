import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Image1 from './../images/misc/TableMac.jpg'
import Image2 from './../images/misc/TableBox.png'

import Image3 from './../images/misc/RosceiteCircle.png'
import Image4 from './../images/misc/RosceiteR.png'

import Image5 from './../images/misc/Roads.jpg'
import Image6 from './../images/misc/Poster.jpg'
import Image7 from './../images/misc/House.jpg'

import Image9 from './../images/misc/MorpheusWhite.png'
import Image10 from './../images/misc/MorpheusGreen.png'

import Back from './../images/back.png'

const Page = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 616px ) {}
`

const BackIcon = styled.img`
  height: 100px;
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

const Intro = styled.section`
  height: 100%;
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
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

const Image = styled.img`
  height: 70%;
  width: 100%;
  object-fit: contain;
`

const IconScroll = styled.div`

width: 15px;
height: 27px;
margin-left: -10px;
top: 60%;
margin-top: -35px;
box-shadow: inset 0 0 0 2px black;
border-radius: 25px;
position: absolute;
left: 50%;

&:before {
  content: '';
  width: 2px;
  height: 2px;
  background: black;
  margin-left: 0px;
  top: 8px;
  border-radius: 4px;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: scroll;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}

@keyframes scroll {
  0% {  opacity: 1; }
  100% {
    opacity: 0;
    transform: translateY(16px);
  }
}

`

const CopyP = styled.p`
font-family: 'Open Sans Condensed', sans-serif;
letter-spacing: 1px;
${({sub}) => (sub) ? SubTitle(sub) : null};
`

const SubTitle = () => {
  return `
  padding: 1em 2em;
  padding-top: 0;
  @media (max-width: 616px) {
    width: 60%;
  }
  `
}

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
  border-bottom: 3px solid black;
`

export default class Misc extends React.Component {
  render () {
    return (
      <Page>
        <Intro>
          <IconScroll />
        </Intro>

        <Outro>
          <AboutContainer>
            <CopyP>Section to showcase work that does not fit in to specific projects.</CopyP>
            <CopyP>Including work I have created whilst self-teaching Cinema 4D, Freelance work and anything else I've made for personal enjoyment.</CopyP>
          </AboutContainer>
        </Outro>

        <ImageContainer>
          <Image src={Image9} />
          <CopyP sub>Logo design for Mopheus, Landscape Gardening Business</CopyP>
        </ImageContainer>

        <ImageContainer>
          <Image src={Image10} />
        </ImageContainer>

        <ImageContainer>
          <Image src={Image3} />
          <CopyP sub>Logo design for Rosceite, Holiday home-stay Business</CopyP>
        </ImageContainer>

        <ImageContainer>
          <Image src={Image4} />
        </ImageContainer>

        <ImageContainer>
          <Image src={Image5} />
          <CopyP sub>Cinema 4D</CopyP>
        </ImageContainer>

        <ImageContainer>
          <Image src={Image6} />
        </ImageContainer>

        <ImageContainer>
          <Image src={Image7} />
        </ImageContainer>

        <ImageContainer>
          <Image src={Image2} />
          <CopyP sub>Logo design</CopyP>
        </ImageContainer>

        <ImageContainer>
          <Image src={Image1} />
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
