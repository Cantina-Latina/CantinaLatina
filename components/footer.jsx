import { Box, Grid, Typography } from '@mui/material';

import { styled, useTheme } from '@mui/material/styles';
import React from 'react';
import { Link } from '@mui/material';

const currentYear = "2022";


const FooterTypography = styled(Typography)(({ theme }) => ({
    color:  theme.palette.headfoot.headFooterFontColor,
    margin: '20px 0 20px 0 !important',
    display: 'block'
}));

const Footer = (props) => {

    const theme = useTheme();

    return (
        <Box id="footer"
            sx={{
                padding: "60px 40px",
                //boxShadow: 'inset 0px 2px 4px 1px rgb(0 0 0 / 20%),inset 0px 4px 5px 0px rgb(0 0 0 / 14%)',
                backgroundColor: theme.palette.headfoot.headFooterColor
            }}>
            <Grid
                container
                spacing={6}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >

                <Grid item md={12} lg={3}>
                </Grid>
                <Grid item  md={10} lg={6}>
                    
                        <FooterTypography>Cantina Latina dosen't really need a web page. As much as we would like to have an online store, our empanadas are enjoyed best freshly made and eaten on the spot.</FooterTypography>
                        
                        <FooterTypography>Website by Philip Bohm @{currentYear}. Created as a demo hand coded site using Next.js and Material design just for Philip's benefit. Hosted on Github because its free.</FooterTypography>

                        <FooterTypography ></FooterTypography>
                    <FooterTypography variant={'h6'} >Website by Philip Bohm @{currentYear}</FooterTypography>
                    <FooterTypography variant={'cute'} >
                        <Link 
                            href="https://github.com/Cantina-Latina/site"
                            sx={{color: theme.palette.headfoot.headFooterLinkColor, textDecoration: 'underline'}}>https://github.com/Cantina-Latina/site
                        </Link>
                    </FooterTypography>      
                    
                </Grid>
                <Grid item  md={12}  lg={3}>
                </Grid>
            </Grid>
            
        </Box>

    );
}

export default Footer;