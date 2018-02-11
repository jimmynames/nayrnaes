require('normalize.css')

import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled  from 'styled-components'

const Background = styled.div`
  height: 100vh;
  width: 100vw;
`

const Layout = styled.div`
  @media (max-width: 693px) {}
`
const Wrap = styled.div`
	max-width: 1200px;
  margin: 0 auto;
`

// const Logo = styled.img`
//   width: 100%;
//   padding-top: 1.25rem;
//   margin: 0;
//   @media (max-width: 693px) {
//     padding-top: 0;
//     width: 50%;
//     margin: 0 auto;
//   }
// `


const NavMenu = styled.ul`
  text-decoration: none;
  margin: 0;
  padding: 0;
  @media (max-width: 693px) {}
  a {
    text-decoration: none;
    }
  a:hover {}
`

const NavItem = styled.li`
  font-size: 18px;
  color: blue;
  font-family: '-apple-system', Helvetica;
  list-style-type: none;
  text-decoration: none;
`

const StickyFrame = styled.section`
  height: 100%;
  width: 100%;
  box-sizing: border-box;

  position: absolute;
  top: 0;
  left: 0;

  z-index: 17;
  background: transparent;

  @media (max-width: 693px) {}
  @media (max-width: 414px) {}

`


const PageRender = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 693px) {}
  @media (max-width: 414px) {}
`

const Container = styled.div`
  position: relative;
`

const TopRight = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  font-family: 'Open Sans Condensed', sans-serif;
  padding: 0.666em 0;
`

const BottomMiddle = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: 'Open Sans Condensed', sans-serif;
  padding: 0.666em 0;
`

const LeftMiddle = styled.div`
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'PT Sans Narrow';
  font-size: 36.66px;
  padding: 0 0.666em;
  padding: 0 0.666em;
  align-items: center;
  align-content: center;
  margin: auto 0;

  text-transform: uppercase;
  color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

   -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
   -webkit-text-stroke-width: 1px;
   -webkit-text-stroke-color: white;

   h3 {
     margin: 0;
   }
`

const RightMiddle = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'PT Sans Narrow';
  font-size: 36.66px;
  padding: 0 0.666em;
  align-items: center;
  align-content: center;
  margin: auto 0;

  text-transform: uppercase;
  color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
   -webkit-text-stroke-width: 1px;
   -webkit-text-stroke-color: white;

   h3 {
     margin: 0;
   }
`

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <Background>
      <Wrap>
        <Layout className="Layout">

        <Helmet
          title="Sean Ryan Graphic Design"
          meta={[
            { name: "description", content: "Sean Ryan Design" },
            { name: "keywords", content: "Sean Ryan Design, Sean Ryan" },
          ]}
        />

        <StickyFrame className="Layout--Container Sticky">
          <Container>
            <TopRight className="nav-menu">
              <Link to="/"><NavItem>Portfolio</NavItem></Link>
              <Link to="/about/"><NavItem>About</NavItem></Link>
            </TopRight>

            <BottomMiddle className="contact-menu">
              <a href="">email@email.com</a>
              <a href="">077777777</a>
            </BottomMiddle>

            <LeftMiddle className="Sean">
                <h3>S</h3>
                <h3>e</h3>
                <h3>a</h3>
                <h3>n</h3>
                <h3>R</h3>
                <h3>y</h3>
                <h3>a</h3>
                <h3>n</h3>
            </LeftMiddle>

            <RightMiddle className="Ryan">
                 <h3>D</h3>
                 <h3>e</h3>
                 <h3>s</h3>
                 <h3>i</h3>
                 <h3>g</h3>
                 <h3>n</h3>
            </RightMiddle>
          </Container>



        </StickyFrame>

        <PageRender className='Page Render'>
          {this.props.children()}
        </PageRender>

      </Layout>
      </Wrap>
    </Background>
    )
  }
}
