import React from 'react';
import picaro from '../images/picaro-stroked.png';
import stripes from '../images/coolness.svg';
import styled from '@emotion/styled';

export const sizes = {
    xs: 360,
    sm: 600,
    md: 768,
    lg: 992,
    xl: 1200,
};

export const colours =  {
    background: "#fff",
    header: "#e7ae3d",
    darkHeader: "#3f2d07",
    secondary: "#79bfee"
}

export const media = Object.keys(sizes).reduce((acc, size) => {
    acc[size] = `@media (min-width: ${sizes[size]}px)`;
    return acc;
}, {});

const Logo = styled.img`
  height: 170px;
  user-select: none;
  margin-bottom: 25px;
  @media (prefers-color-scheme: dark) {
    transform: scale(1.07);
  }
`;

const HeaderStyled = styled.header`

  color: #FFFFFF;
  text-align: center;
  padding: 60px 25px 50px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-image:  url(${stripes.src}),
        radial-gradient(400px, #fff, #fff1e1 10%, ${colours.darkHeader});
    background-position: center 10%;
    background-size: cover;

    // ${media.sm} {
    //   background-image: url(${stripes.src}),
    //     radial-gradient(500px, #fff, #fff1e1 20%, #ffa0b1),
    //     filter: invert(48%) sepia(79%) saturate(76%) brightness(18%) contrast(19%);
    
    // }

    // @media (prefers-color-scheme: dark) {
    //   background-image: url(${stripes.src}),
    //     radial-gradient(350px, #521a22, #63242d 20%, #71444b);
    //   ${media.sm} {
    //     background-image: url(${stripes.src}),
    //       radial-gradient(500px, #521a22, #63242d 20%, #71444b);
    //   }
    // }
  }
`

const BusinessTitle = styled.h1`
    font-family: 'Titan One', cursive;
    margin: 0;
    font-size: 5em;
`
const SubHeading = styled.h3`
  margin: 0;
  font-size: 1.45em;
  font-family: Roboto:wght@100;
`

const Header = (props) => {

    return (
        <HeaderStyled>
            <picture>
                <Logo src={picaro.src} alt="Cantina Latina Logo" draggable="false" />
            </picture>

            <BusinessTitle>
                Cantina Latina
            </BusinessTitle>
            <SubHeading>Empanada Specialists - Salamanca Market Hobart Tasmania</SubHeading>
        </HeaderStyled>

    );

}

export default Header;