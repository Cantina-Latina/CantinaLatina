import { Typography } from "@mui/material"
import {Box}  from "@mui/material"
import { MenuPageLinksSocialsList } from "../components/menuPageLinksSocialsList"
import { ParallaxPageBox } from "../components/parallaxPageBox"





export default function Contact({ children }) {


    return (

        <>

                <Box > 

                    <main>
                    <ParallaxPageBox bgColor={"#FEFEFE"}>
                        <Typography variant="h2">Contacts</Typography>
                        <MenuPageLinksSocialsList />
                        </ParallaxPageBox>
                    </main>


                </Box>



        </>

    )
}