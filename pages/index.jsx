import Script from 'next/script';
import { Blobs } from '../components/blobs';
import { OurMenu } from '../components/ourMenu';
import { Box } from '@mui/material';
import { ParallaxPageBox } from '../components/parallaxPageBox';



function HomePage({ }) {

  return (
    <>
      <div id="rain-animation"></div>
      <Script type="module" src="/rainMaker.js" />
        <Blobs />

        <Box sx={{alignItems:"center", maxWidth:"1600px", margin: "150px auto"}}>
        <ParallaxPageBox>

        <OurMenu />
        </ParallaxPageBox>
        </Box>

    </>
  );
}

export default HomePage;
