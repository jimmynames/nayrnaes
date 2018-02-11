import React from "react"
import styled from 'styled-components'
// import Page from './../components/Page'

const Page = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`

const AboutContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 80%;
  width: 80%;
  ${'' /* border: 2px solid black; */}
  padding: 1em 2em;
  padding-top: 0;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
`

const Copy = styled.h3`
  font-family: 'Open Sans Condensed', sans-serif;
  h3 {
    margin: 0;
    margin-bottom: 1em
  }
`

export default class Index extends React.Component {
  render() {
    return (
      <Page>
        <AboutContainer>
          <Copy>I’m a graphic design student, currently studying at Central Bedfordshire College.</Copy>
          <Copy>I am looking to work in the industry and further my knowledge as a designer.</Copy>
          <Copy>I am also available to take on freelance work on a job-by-job basis and would love to hear from you.</Copy>
        </AboutContainer>
      </Page>
    )
  }
}
