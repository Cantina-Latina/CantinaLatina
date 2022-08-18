import Script from 'next/script';
import { Box } from '@mui/material';
import About from './about';



function IndexPage({ }) {

  return (
    <>
        <Script src="/mousePosition.js" />

        <Box>
        <About />
        </Box>

    </>
  );
}

export default IndexPage;
