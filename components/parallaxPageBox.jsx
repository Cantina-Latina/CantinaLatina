import { Box } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import {Typography} from "@mui/material";

export const ParallaxPageBox = ({ id, children, bgColor, className }) => {

    bgColor = (bgColor != undefined) ? bgColor : "inherit";

    return (
        <>
            <Box id={id} className={className}
                sx={{
                    backgroundColor: bgColor,
                    justifyContent: 'center',
                    textAlign: 'inherit',
                    padding: {lg:'200px 80px 45px',xs: '100px 20px '},
                    paddingTop: {lg:'160px',xs: '120px'},
                }}
            >


                <Box sx={{
                    backgroundColor: bgColor,
                    justifyContent: 'center',
                    maxWidth: "800px",
                    margin: '0 auto'
                }}>

                    <Parallax speed={-5}  >
                        {children}

                        <Typography></Typography>
                    </Parallax>
                </Box>



            </Box>
        </>

    )
};

