import { Typography, Link } from "@mui/material"
import { Box } from "@mui/system"
import { Stack } from "@mui/material"
import { useEffect, useState } from 'react'
import ImageMozaic from "../components/imageMozaic"
import { Parallax } from 'react-scroll-parallax'
import { OurMenu } from "../components/ourMenu"
import { ParallaxPageBox } from '../components/parallaxPageBox'



// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            //console.log(width);
            setWindowSize({
                width: Math.floor(window.innerWidth / 4) + "px",
                height: Math.floor(window.innerHeight / 2.5) + "px",
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}




export default function Contact({ children }) {

    const size = useWindowSize();

    return (

        <>
            <Stack direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={8}>


                <Box maxWidth={880} minWidth={420}>

                    <main>
                        <ParallaxPageBox>
                            asdasd
                        </ParallaxPageBox>
                    </main>


                </Box>

            </Stack>


        </>

    )
}