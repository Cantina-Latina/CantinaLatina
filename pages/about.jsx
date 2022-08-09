import { Typography, Link } from "@mui/material"
import { Box } from "@mui/system"
import { Stack } from "@mui/material"
import { useEffect, useState } from 'react'
import ImageMozaic from "../components/imageMozaic"
import { Parallax } from 'react-scroll-parallax'
import { OurMenu } from "../components/ourMenu"
import { ParallaxPageBox } from '../components/parallaxPageBox'
//import { ReactRotatingText } from '../components/react-rotating-text'
var ReactRotatingText = require('react-rotating-text');



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
                width: Math.floor(window.innerWidth / 2) + "px",
                height: Math.floor(window.innerHeight / 1.5) + "px",
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




export default function About({ children }) {

    const size = useWindowSize();

    return (

        <>

                <Box id="munted">
                    <main>
                    <ParallaxPageBox bgColor={"#595959"} 
                    >
                        <Typography variant="h2" style={{color : "#FFFFFF", margin: '0px'}} >
                            About Cantina Latina
                        </Typography>
                        <Typography variant="h4" >
                            Making fresh Empanadas since 2013
                        </Typography>

                        <Typography variant="h6" style={{color : "#FFFFFF"}}><i>"Crisp, flavour-crammed empanadas are hand-made while you watch. Strong vegetarian and vegan options,
                            or throw it all to the wind and get into the Pino: slow-cooked Tasmanian beef, golden onions, raisins, herbs, and olives."</i>
                        </Typography>
                        <Typography >
                            <strong>* Bio from the 2022 MOFO Winter Feast</strong>
                        </Typography>
                    </ParallaxPageBox>

                    <ParallaxPageBox bgColor={"#FFCD61"}>
                        <Typography variant="h3" >
                            How did it all start?
                        </Typography>
                        <Typography variant="body2">Chilean ex-pat <Link color={"#0E46AD"} to='https://www.facebook.com/joana.cubillos'>Joana Cubillos</Link> after finishing a science degree and completing a PHD in marine biology and expecting a child in the next few months decided to try with a friend, Chilean Fernanda Sotomayor to make and sell Empanadas to other chileans craving the popular street food.
                        </Typography>
                        <Typography variant="body2" color="initial">
                            After several successful events like the Cygnet Folk Festival, Wooden Boat Festival, Hobart Twilight Market, Sandy Bay Easter Long weekend celebration, they tried as casuals at Salamanca market which went well. Fernanda returned to Chile and Joana's partner and new dad <Link color={"#0E46AD"} to="https://www.facebook.com/philip.bohm">Philip (loco Rubio) Bohm</Link> came on board and the permanent stall at Salamanca Market was born.
                        </Typography>

                        <Typography variant="h3" id="eventInfo" >
                            What we do today?
                        </Typography>

                        <Typography variant="body2">Every saturday we are at Salamanca Market from 8am to 3pm serving Empanadas from our market stall. Sometimes we are also doing other events in parallel. From the huge enterprize of the MOFO Winter Feast to supplying a small office party, we have it covered. </Typography>
                        <Typography variant="h5">
                        Please feel free to <a href="contact">contact us</a> about your upcoming event!
                        </Typography>
                
                    </ParallaxPageBox>

                    </main>
                    <ParallaxPageBox bgColor={'#CB992D'}>
                        <OurMenu />
                    </ParallaxPageBox>

                    <ParallaxPageBox bgColor={"#4f5058"}>
                        <Typography variant="h3" color="white">
                            Photos from the <ReactRotatingText 
                            cursor={true} 
                            items={['vault', 'beginnings', 'historicos']} 
                            pause={2500}
                            emptyPause={1500}
                            typingInterval={75}
                            deletingInterval={75}
                            />
                        </Typography>
                        <ImageMozaic />
                    </ParallaxPageBox>

                    <ParallaxPageBox id="googleMapsLocator" bgColor={'#0E46AD'} >

                        <Box sx={{ 
                            position: 'relative', 
                            padding: '40px',
                            borderRadius: '4px'
                            }} >
                        <Typography variant="h2"  color="white">Every Saturday at Salamanca Market</Typography>
                        <Typography color="white">Come and get our Empanadas at stall number 49. Thats on the roundabout near the Irish Murphies pub</Typography>
                        <Box height={size.height}  >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.1543227399657!2d147.32860811584175!3d-42.886617946124936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa6e7510d22ab3e9%3A0x1bf6625effa1c676!2sCantina%20Latina!5e0!3m2!1sen!2sau!4v1659350949974!5m2!1sen!2sau"
                                height="100%" width="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Box>

                    </Box>
                    </ParallaxPageBox>
                </Box>





        </>

    )
}