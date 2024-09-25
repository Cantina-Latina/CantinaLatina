import { Box, Grid, Typography } from '@mui/material';
import { ParallaxPageBox } from "../components/parallaxPageBox"

import { styled, useTheme } from '@mui/material/styles';
import React from 'react';
import { Link } from '@mui/material';

const currentYear = "2022";


const FooterTypography = styled(Typography)(({ theme }) => ({
    color:  theme.palette.headfoot.headFooterFontColor,
    //margin: '20px 0 20px 0 !important',
    //display: 'block'
}));

const Footer = (props) => {

    const theme = useTheme();

    return (
        <ParallaxPageBox 
        id="contact" 
        bgColor={theme.palette.headfoot.headFooterColor} 
        containerStyle={{
            padding: {lg:'100px 20px 45px', xs: '100px 20px '},
            //paddingTop: {lg:'40px',xs: '0'},
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
        
            <Grid container >


                <Grid item  md={8} lg={10}>
                    
                        <FooterTypography>Cantina Latina dosen't really need a web page. As much as we would like to have an online store, our empanadas are enjoyed best freshly made and eaten on the spot.</FooterTypography>
                        
                        <FooterTypography>Website created as a demo hand coded site using Next.js and Material design just for Philip's practice in @{currentYear}. Hosted on Github because its free.</FooterTypography>

                        <FooterTypography >
                        <Link 
                            href="https://github.com/Cantina-Latina/site"
                            sx={{color: theme.palette.headfoot.headFooterLinkColor, textDecoration: 'underline'}}>https://github.com/Cantina-Latina/site
                        </Link>
                    </FooterTypography>      
                    
                </Grid>
            </Grid>
            
        </ParallaxPageBox>

    );
}

export default Footer;