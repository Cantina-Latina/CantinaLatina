import { Typography } from "@mui/material"
import { Box } from "@mui/material"
import { SocialsList } from "../components/socialsList"
import { ParallaxPageBox } from "../components/parallaxPageBox"
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2


export default function Contact({ children }) {


    return (

        <>

            <main>
                <ParallaxPageBox 
                    id="contact" 
                    bgColor={"#494435"} 
                    containerStyle={{
                        padding: {lg:'20px 20px 45px', xs: '100px 20px '},
                        paddingTop: {lg:'40px',xs: '0'},
                        backgroundAttachment: 'fixed',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    <Box sx={{
                        padding: { lg: '60px 90px', xs: '20px 50px' },
                        borderRadius: '4px',
                    }} >
                        <Typography variant="h3" md={12} lg={3} style={{ color: "#FFFFFF", margin: '0px' }} >
                            Any enquiries please send us an email. </Typography>
                        <Grid2 container
                            spacing={6}
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"

                        >
                            <Grid2 md={12} lg={4}>
                                <SocialsList textcolor="white" />
                            </Grid2>

                            <Grid2 md={8} lg={8}>
                                <Typography variant="h4" style={{ color: "#D69C1E" }} >Follow us on Facebook and Instagram.
                                </Typography>
                            </Grid2>
                        </Grid2>
                    </Box>
                </ParallaxPageBox>
            </main>

        </>

    )
}