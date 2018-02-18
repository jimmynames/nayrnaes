import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Image1 from './../images/Smoking1.png'
import Image2 from './../images/Smoking2.png'
import Image3 from './../images/Smoking3.png'
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

  background: #FEDC00;
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
  border-bottom: 3px solid #FEDC00;
`

const CopyP = styled.p`
font-family: 'Open Sans Condensed', sans-serif;
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

export default class Health extends React.Component {
  render () {
    return (
      <Page>
        <Intro>
          <Copy>Health Warnings</Copy>
          <IconScroll />
        </Intro>

        <Outro>
          <AboutContainer>
            <CopyP>This was the first project that I focused on 3D design, working in Cinema 4D to create the visuals for my posters.</CopyP>
            <CopyP>I was tasked to create an advertising campaign for a company created by myself. I decided that rather than trying to sell something, my advertising campaign would be to highlight the dangers of food and drink that could have harmful side effects if over consumed. To achieve this I worked with the colours and labels shown on the current UK cigarette packaging, as the aim of these is to demote smoking and the sale of cigarettes.</CopyP>
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

        <Outro>
          <Link to='/'>
            <BackIcon src={Back} />
          </Link>
        </Outro>

      </Page>
    )
  }
}
