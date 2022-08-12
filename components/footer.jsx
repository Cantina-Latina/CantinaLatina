import { Box, Grid, Typography } from '@mui/material';

import { styled, useTheme } from '@mui/material/styles';
import React from 'react';
import { Link } from '@mui/material';

const currentYear = "2022";


const FooterTypography = styled(Typography)(({ theme }) => ({
    margin: '10px 0 10px 0 !important',
    display: 'block'
}));

const Footer = (props) => {

    const theme = useTheme();

    return (
        <Box id="footer"
            sx={{
                padding: "60px 40px",
                boxShadow: 'inset 0px 2px 4px 1px rgb(0 0 0 / 20%),inset 0px 4px 5px 0px rgb(0 0 0 / 14%)',
                backgroundColor: theme.palette.headfoot.main
            }}>
            <Grid
                container
                spacing={6}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >

                <Grid item md={12} lg={4}>
                    <FooterTypography variant={'h6'} >Website by Philip Bohm @{currentYear}</FooterTypography>
                </Grid>
                <Grid item  md={8} lg={4}>
                    
                        <FooterTypography>Cantina Latina dosen't really need a web page. As much as we would like to have an online store, our empanadas are enjoyed best freshly made and eaten on the spot.</FooterTypography>
                        <FooterTypography>Yes we do the socials like everybody else. <Link sx={{color: '#114153', textDecoration: 'underline'}} href="contact">Contact us</Link> via email so that we both dont miss your message or read our latest posts on Facebook and Instagram.</FooterTypography>
                        <FooterTypography>This page is a demonstration of a hand coded site using <Link to="Next.js" sx={{color: '#114153', textDecoration: 'underline'}}>Next.js</Link> and Material design just for Philip's benefit.</FooterTypography>
                    
                </Grid>
                <Grid item md={false} lg={4}>
                </Grid>
            </Grid>
            
        </Box>

    );
}

export default Footer;