import { Typography, Link } from "@mui/material"
import {Box}  from "@mui/material"
import { MenuPageLinksSocialsList } from "../components/menuPageLinksSocialsList"
import { ParallaxPageBox } from "../components/parallaxPageBox"





export default function Contact({ children }) {


    return (

        <>

                <Box > 

                    <main>
                    <ParallaxPageBox bgColor={"#FFCD61"}>
                        <MenuPageLinksSocialsList />
                        </ParallaxPageBox>
                    </main>


                </Box>



        </>

    )
}