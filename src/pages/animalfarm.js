import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Image1 from './../images/AnimalFarm1.png'
import Image2 from './../images/AnimalFarm2.jpg'
import Image3 from './../images/AnimalFarm3.png'
import Image4 from './../images/AnimalFarm4.jpg'
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

  background: #BE1721;
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
  border-bottom: 3px solid #BE1721;
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

export default class Animal extends React.Component {
  render () {
    return (
      <Page>
        <Intro>
          <Copy>Animal Farm</Copy>
          <IconScroll />
        </Intro>

        <Outro>
          <AboutContainer>
            <CopyP>For this project I followed a live brief set by Penguin Random House, for the Student Design Awards 2018. They asked to create a front cover that redesigned the timeless novel, Animal Farm by George Orwell.</CopyP>
            <CopyP>The two front covers I created where to give a variety of style. One focusing on the typography I created. By adding the hyphen between the word ‘animal’ to create the appearance of three words, the aim of which to add a Russian feel to an English word. The other a more visual display using negative space to highlight the main character animals throughout the novel, trying to create an overshadowing pig on the front cover.</CopyP>
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

        <Outro>
          <Link to='/'>
            <BackIcon src={Back} />
          </Link>
        </Outro>
      </Page>
    )
  }
}
