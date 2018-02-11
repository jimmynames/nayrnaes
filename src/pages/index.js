import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import mouse from './../images/mouse.gif'

const Page = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 616px ) {}
`

const MouseIcon = styled.img`
  height: 100px;
`

const CaseStudy = styled.section`
  height: 100%;
  width: 100%;
  background: #BE1721;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;

  a {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Open Sans Condensed', sans-serif;
    text-decoration: none;
    color: black;
  }
`

const CaseStudy2 = styled.section`
  height: 100%;
  width: 100%;
  background: #7EC3ED;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;

  a {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Open Sans Condensed', sans-serif;
    text-decoration: none;
    color: black;
  }
`

const CaseStudy3 = styled.section`
  height: 100%;
  width: 100%;
  background: #FEDC00;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;

  a {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Open Sans Condensed', sans-serif;
    text-decoration: none;
    color: black;
  }
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

const Box = styled.div`
  padding: 1em 3em;
  border: 2px solid black;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {


  }
`

const Copy = styled.h3`
  font-family: 'Open Sans Condensed', sans-serif;
  h3 {
    margin: 0;
    margin-bottom: 1em
  }
`

export default class Index extends React.Component {
  render () {
    return (
      <Page>
        <Intro>
          <MouseIcon src={mouse} />
        </Intro>
        <CaseStudy>
          <Link to='/animalfarm'>
            <Box>
              <Copy>Animal Farm</Copy>
            </Box>
          </Link>
        </CaseStudy>

        <CaseStudy2>
          <Link to='/moove'>
            <Box>
              <Copy>Moove</Copy>
            </Box>
          </Link>
        </CaseStudy2>

        <CaseStudy3>
          <Link to='/healthwarnings'>
            <Box>
              <Copy>Health Warnings</Copy>
            </Box>
          </Link>
        </CaseStudy3>
      </Page>
    )
  }
}
