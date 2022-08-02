import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Stack } from "@mui/material"
import { useEffect, useState } from 'react'


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
    console.log(windowSize);
    return windowSize;
}




export default function About({ children }) {

    const size = useWindowSize();

    return (
        <Box>

            <main>
                <Stack direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    spacing={8}>

                    <Box maxWidth={800} minWidth={400}>
                        <Typography variant="h3" >
                            About Cantina Latina
                        </Typography>
                        <Typography variant="h5" >
                            Making fresh Empanadas since 2012
                        </Typography>

                        <Typography><i>Our crisp, flavour-crammed empanadas are hand-made while you watch. Strong vegetarian and vegan options,
                            or throw it all to the wind and get into the Pino: slow-cooked Tasmanian beef, golden onions, raisins, herbs, and olives.</i></Typography>
                        <h3>asasdasdasd</h3>
                        <p>sdfsdf</p>
                    </Box>
                    <Box>
                        <Typography variant="h5" color="initial">Every Saturday at Salamanca Market</Typography>
                        <Typography>... you can buy our Empanadas at stall number 49. Thats on the roundabout near the Irish Murphies pub</Typography>
                        <Box width={size.width} height={size.height}  >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.1543227399657!2d147.32860811584175!3d-42.886617946124936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa6e7510d22ab3e9%3A0x1bf6625effa1c676!2sCantina%20Latina!5e0!3m2!1sen!2sau!4v1659350949974!5m2!1sen!2sau"
                                height="100%" width="100%" sx="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Box>

                    </Box>
                </Stack>
            </main>
        </Box>

    )
}