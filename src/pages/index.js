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

export default class Index extends React.Component {
  render () {
    return (
      <Page>
          <CaseStudy />
          <CaseStudy2 />
          <CaseStudy3 />
      </Page>
    )
  }
}
