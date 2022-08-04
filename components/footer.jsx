import { Box , Grid} from '@mui/material';

import { styled, useTheme } from '@mui/material/styles';
import React from 'react';

const currentYear = "2022";

const Footer = (props) => {

    const theme = useTheme();

    return (
            <Box 
            
            sx={{
                color: 'white',
                padding: "60px 40px",
                boxShadow: 'inset 0px 2px 4px 1px rgb(0 0 0 / 20%),inset 0px 4px 5px 0px rgb(0 0 0 / 14%)',
                backgroundColor: '#272100'
            }}>
                <Grid container spacing={2}>

                <Grid item  xs={6} md={4}>
                <h3>Website by Philip Bohm @{currentYear}</h3>
                    </Grid>
                <Grid item  xs={6} md={8}>
                <p>stuff</p>
                    </Grid>
                </Grid>
            </Box>

    );
}

export default Footer;