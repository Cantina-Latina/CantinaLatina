import React from 'react';
import picaro from '../images/picaro-stroked.png';
import stripes from '../images/coolness.svg';
import styled from '@emotion/styled';

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
  height: 190px;
  user-select: none;
  ${media.sm} {
    height: 150px;
  }
`;

const HeaderStyled = styled.header`

  color: ${colours.primary};
  text-align: center;
  padding: 60px 25px 50px;
  height: 75%;
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
    background-position: center 45%;
    background-size: cover;
  }
`

const BusinessTitle = styled.h1`
    font-family: 'Titan One', cursive;
    margin: 0;
    font-size: 5em;
    ${media.lg} {
      font-size: 4em;
    }
    ${media.md} {
      font-size: 2.5em;
    }
`
const SubHeading = styled.h3`
  margin: 0;
  font-size: 1.45em;
  font-family: Roboto:wght@100;
  ${media.lg} {
    font-size: 1.2em;
  }
  ${media.md} {
    font-size: 1em;
  }
`

const Header = (props) => {

  return (
    <HeaderStyled>
      <div>
      <picture >
        <Logo src={picaro.src} alt="Cantina Latina Logo" draggable="false" />
      </picture>
      </div>

      <BusinessTitle>
        Cantina Latina
      </BusinessTitle>
      <SubHeading>Empanada Specialists - Salamanca Market Hobart Tasmania</SubHeading> 
    </HeaderStyled>

  );

}

export default Header;