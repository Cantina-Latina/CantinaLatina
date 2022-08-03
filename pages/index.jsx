import Script from 'next/script';
import { Blobs } from '../components/blobs';
import { OurMenu } from '../components/ourMenu';



function HomePage({ }) {

  return (
    <>      
      <div id="rain-animation"></div>
      <Script type="module" src="/rainMaker.js" /> 
      <Blobs /> 
      <OurMenu />
      

    </>
  );
}

export default HomePage;
