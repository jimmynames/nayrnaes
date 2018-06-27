import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Page = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 616px ) {}
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
    font-family: 'Open Sans', sans-serif;
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
    font-family: 'Open Sans', sans-serif;
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
    font-family: 'Open Sans', sans-serif;
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
  font-family: 'Open Sans', sans-serif;
  h3 {
    margin: 0;
    margin-bottom: 1em
  }
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

export default class Index extends React.Component {
  render () {
    return (
      <Page>
        <Intro>
          <IconScroll />
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
