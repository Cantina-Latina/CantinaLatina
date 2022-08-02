import { Box } from '@mui/material';
import React from 'react';

const currentYear = "2022";

const Footer = (props) => {

    return (
        <Box sx={{ 
            padding: "60px 40px",
            boxShadow: 'inset 0px 2px 4px 1px rgb(0 0 0 / 20%),inset 0px 4px 5px 0px rgb(0 0 0 / 14%)',
            backgroundColor: 'gray'
        }}>
            <h3>Website by Philip Bohm @{currentYear}</h3>
        </Box>
    );
}

export default Footer;