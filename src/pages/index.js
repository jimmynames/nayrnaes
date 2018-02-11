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
`

const CaseStudy3 = styled.section`
  height: 100%;
  width: 100%;
  background: #3A3418;
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

const Box = styled.div`
  border: 2px solid black;
  padding: 1.5em 3em;
  background: white;
`

export default class Index extends React.Component {
  render () {
    return (
      <Page>
          <Intro />
          <CaseStudy>
            <Link to="">
              <Box />
            </Link>
          </CaseStudy>
          <CaseStudy2 />
          <CaseStudy3 />
      </Page>
    )
  }
}
