import {  Typography } from "@mui/material"
import { Box } from "@mui/material"
import { SocialsList } from "../components/socialsList"
import { ParallaxPageBox } from "../components/parallaxPageBox"
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2


export default function Contact({ children }) {


    return (

        <>


                <main>

                
                    <ParallaxPageBox id="contact"  bgColor={"#595959"} >
                        <Box sx={{ 
                padding: '60px 90px',
                borderRadius: '4px'
                }} >
                        <Typography variant="h3" md={12}  lg={3}  style={{color : "#FFFFFF", margin: '0px'}} >
                                Any enquiries please give us an email. </Typography>
                        <Grid2 container
                            spacing={6}
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                          
                        >
                            <Grid2 md={12} lg={4}>
                                <SocialsList textcolor="white" />
                            </Grid2>

                            <Grid2 md={8} lg={4}>
                                <Typography variant="h5" style={{color : "#D69C1E"}} >Follow us on Facebook and Instagram.
                                </Typography>
                            </Grid2>


                        </Grid2>

                </Box>
                    </ParallaxPageBox>
                </main>





        </>

    )
}