import React from 'react'
import styled from 'styled-components'

import Image1 from './../images/AnimalFarm1.png'
import Image2 from './../images/AnimalFarm2.jpg'
import Image3 from './../images/AnimalFarm3.png'
import Image4 from './../images/AnimalFarm4.jpg'

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

export default class Animal extends React.Component {
  render () {
    return (
      <Page>
        <Intro>
          <Copy>Animal Farm</Copy>
        </Intro>

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

      </Page>
    )
  }
}
