import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 616px ) {}
`

const CaseStudy = styled.section`
  height: 100%;
  width: 100%;
  background: red;
  border-bottom: 5px solid white;
`

const CaseStudy2 = styled.section`
  height: 100%;
  width: 100%;
  background: blue;
  border-bottom: 5px solid white;
`

export default class Index extends React.Component {
  render () {
    return (
      <Page>
          <CaseStudy />
          <CaseStudy2 />
      </Page>
    )
  }
}
