import { Box } from "@mui/system";
import { Parallax } from "react-scroll-parallax";

export const ParallaxPageBox = ({ children }) => {

    return (
        <>
        <Parallax speed={-5}>
            <Box sx={{ 
                backgroundColor: "white", 
                //margin: "50px",
                marginBottom: "100px", 
                padding: "50px 75px", 
                borderRadius: "5px" 
                }}
            >
                {children}
            </Box>
        </Parallax>
        </>

    )
};

