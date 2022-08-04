import { Box } from "@mui/material";
import { Parallax } from "react-scroll-parallax";

export const ParallaxPageBox = ({ children, bgColor }) => {

    bgColor = (bgColor != undefined) ? bgColor : "#FFFFFF" ;

    return (
        <>
            <Parallax speed={-5} style={{
                    //backgroundColor: 'grey',
                    //margin: "50px",
                    //padding: "50px 75px", 
                    //padding: "4px",
                    //borderRadius: "5px" 
                }}>
                    <Box 
                    justifyContent="center" 
                    maxWidth={880} minWidth={420}
        
                    sx={{
                        backgroundColor: bgColor,
                        //margin: "-1px",
                        //marginBottom: "100px",
                        padding: "50px 75px",
                        borderRadius: "4px"
                    }}
                    >

                        {children}
                    </Box>
            </Parallax>
        </>

    )
};

