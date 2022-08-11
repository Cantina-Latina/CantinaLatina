import { Box , Grid, Typography} from '@mui/material';

import { styled, useTheme } from '@mui/material/styles';
import React from 'react';
import {Link} from '@mui/material';

const currentYear = "2022";

const Footer = (props) => {

    console.log(props);
    const theme = useTheme();

    console.log(theme);
    return (
            <Box id="footer"
            
            sx={{
                color: 'white',
                padding: "60px 40px",
                boxShadow: 'inset 0px 2px 4px 1px rgb(0 0 0 / 20%),inset 0px 4px 5px 0px rgb(0 0 0 / 14%)',
                backgroundColor: theme.palette.headfoot.main
            }}>
                <Grid container spacing={2}>

                <Grid item  xs={6} md={4}>
                <Typography variant={'h6'} >Website by Philip Bohm @{currentYear}</Typography>
                    </Grid>
                <Grid item  xs={6} md={8}>
                    <Typography variant='cramped'>Cantina Latina dosen't really need a web page. As much as we would like to have an online store, our empanadas are enjoyed best freshly made and eaten on the spot.</Typography> 
                    <Typography variant='cramped'>We do the socials like everybody else. <Link href="contact">Contact us</Link> via email so that we both dont miss your message or read our latest posts on Facebook and Instagram</Typography>
                    <Typography variant='cramped'>This page is a demonstration of a hand coded site using <Link to="Next.js" >Next.js</Link> and Material design just for Philip's benefit.</Typography>
                    </Grid>
                </Grid>
            </Box>

    );
}

export default Footer;