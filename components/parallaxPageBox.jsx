import { Box } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import {Typography} from "@mui/material";

export const ParallaxPageBox = ({ children, bgColor }) => {

    bgColor = (bgColor != undefined) ? bgColor : "#FFFFFF";

    return (
        <>
            <Box
                sx={{
                    backgroundColor: bgColor,
                    justifyContent: 'center',
                    textAlign: 'inherit',
                    padding: '200px 80px 45px',
                    paddingTop: "160px",
                    //marginBottom: "100px",
                    //padding: "50px 75px",
                    //borderRadius: "4px"
                }}
            >


                <Box sx={{
                    backgroundColor: bgColor,
                    justifyContent: 'center',
                    maxWidth: "800px",
                    minWidth: "420px",
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

