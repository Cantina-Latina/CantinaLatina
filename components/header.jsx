import React from 'react';
import picaro from '../images/picaro-stroked.png';
import stripes from '../images/coolness.svg';
import styled from '@emotion/styled';
import { Stack, Box, AppBar } from '@mui/material';
import MenuDrawer from './menuDrawer';
import { Parallax } from 'react-scroll-parallax';


// MUI sizes
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

export const sizes = {
  xs: 360,
  sm: 600,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const colours = {
  background: "#fff",
  primary: "#4f2601",
  secondary: "#c78e16",
  third: "#de841c",
  complimentary: "#3f2d07"
}

export const media = Object.keys(sizes).reduce((acc, size) => {
  acc[size] = `@media (max-width: ${sizes[size]}px)`;
  return acc;
}, {});

const Logo = styled.img`
  height: ${(props) => props.picaroSize};
  ${(props) => props.picaroCss}
  user-select: none;
  ${media.sm} {
    height: 150px;
  }
`;


const HeaderStyled = styled.header`

  color: ${colours.primary};
  display: flex; 
  text-align: ${(props) => props.textAlign};
  padding: ${(props) => props.backgroundPadding};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
      background-image: url(${stripes.src}),
          radial-gradient(500px,  #FFF 10%,  ${colours.secondary});
    background-position:  ${(props) => props.backgroundPos};
    background-size:  cover ;
  }
`

const BusinessTitle = styled.h1`
    font-family: 'Titan One', cursive;
    margin: 0;
    font-size: ${(props) => props.fontSize};
    ${media.xl} {
      font-size: 4em;
    }
    ${media.lg} {
      font-size: 3em;
    }
    ${media.lg} {
      font-size: 3em;
    }
    ${media.md} {
      font-size: 2.5em;
    }
`
const SubHeading = styled.h3`
  margin: 0;
  font-size: 1.45em;
  font-weight: 300;
  ${media.lg} {
    font-size: 1.2em;
  }
  ${media.md} {
    font-size: 1em;
  }
`

const Header = (props) => {

  const backgroundPos = (props.backgroundPos) ? props.backgroundPos : 'center 45%';
  const picaroSize = (props.picaroSize) ? props.picaroSize : '190px';
  const picaroCss = (props.picaroCss) ? props.picaroCss : '';
  const stackDirection = (props.stackDirection) ? props.stackDirection : 'column';
  
  const backgroundPadding = (stackDirection != 'column') ? '70px 35px 45px 20px' : '60px 25px 50px 25px';


  return (
    <>
      <AppBar position="fixed" >
        <MenuDrawer />
      </AppBar>
      <HeaderStyled
        //style={{paddingRight: '200px'}}
        backgroundPos={backgroundPos}
        backgroundPadding={backgroundPadding}
        //textAlign={(stackDirection == 'column') ? 'center' : 'inherit'}
      >


        <Parallax speed={-3} >
          <Stack
            direction={stackDirection}
            alignItems="center"
            spacing={5}
          >
            <Box >
              <picture >
                <Logo
                  src={picaro.src}
                  alt="Cantina Latina Logo"
                  draggable="false"
                  picaroSize={picaroSize}
                  picaroCss={picaroCss} />
              </picture>
            </Box>
            <Box>
              <BusinessTitle fontSize={(stackDirection == 'column') ? '5em' : '5em'}>
                Cantina Latina
              </BusinessTitle>
              <SubHeading>Empanada Specialists - Salamanca Market Hobart Tasmania</SubHeading>
            </Box>

          </Stack>
        </Parallax>

      </HeaderStyled>
    </>


  );

}

export default Header;