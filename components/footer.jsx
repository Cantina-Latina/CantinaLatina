import { Box } from '@mui/material';
import React from 'react';

const currentYear = "2022";

const Footer = (props) => {

    return (
        <Box sx={{ padding: "30px" }}>
            <h3>Website by Philip Bohm @{currentYear}</h3>
        </Box>
    );
}

export default Footer;