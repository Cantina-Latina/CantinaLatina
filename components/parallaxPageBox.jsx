import { Box } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import {Typography} from "@mui/material";

export const ParallaxPageBox = ( props ) => {


    let { id, children, bgColor, className, containerStyle, ...other } = props;

    containerStyle = {
        backgroundColor: bgColor,
        justifyContent: 'center',
        textAlign: 'inherit',
        padding: {lg:'90px 80px 70px 80px',xs: '70px 20px '},
        ...containerStyle,
    }


    bgColor = (bgColor != undefined) ? bgColor : "inherit";

    return (
        <>
            <Box id={id} className={className} sx={containerStyle} >
                <Box sx={{
                    backgroundColor: bgColor,
                    justifyContent: 'center',
                    maxWidth: "800px",
                    margin: '0 auto'
                }}>
                    <Parallax speed={-5}  >
                        {children}
                    </Parallax>
                </Box>



            </Box>
        </>

    )
};

