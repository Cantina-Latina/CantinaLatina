import Script from 'next/script';
import { Blobs } from '../components/blobs';
import { Box } from '@mui/material';
import About from './about';



function DemoPage({ }) {

  return (
    <>
      <Script src="/mousePosition.js" />

      <div id="rain-animation"></div>
      <Script type="module" src="/rainMaker.js" />
        <Blobs />

        <Box sx={{alignItems:"center",  margin: "90px auto 0 auto", position: "relative"}}>
        {/* <ParallaxPageBox sx={{}}> */}
        {/* border:'2px solid black',  borderRadius:'30px', */}

        {/* <OurMenu /> */}
        <About />   
        {/* </ParallaxPageBox> */}
        </Box>

    </>
  );
}

export default DemoPage;
