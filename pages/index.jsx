import Script from 'next/script';
import { Blobs } from '../components/blobs';


function HomePage({ }) {

  return (
    <>
      <Blobs />

      <div id="rain-animation"></div>
      <Script type="module" src="/rainMaker.js" />
    </>
  );
}

export default HomePage;
