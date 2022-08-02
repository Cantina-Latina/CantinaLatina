import Script from 'next/script';
import { Blobs } from '../components/blobs';


function HomePage({ }) {

  return (
    <>      
      <div id="rain-animation"></div>
      <Script type="module" src="/rainMaker.js" />
      <Blobs />


    </>
  );
}

export default HomePage;
