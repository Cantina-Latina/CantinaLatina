
import Script from 'next/script';
import Link from 'next/link'
import Fab from '@mui/material/Fab';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Grid} from '@mui/material';
import Blob from '../components/blob';


function HomePage({ }) {

  return (
    <>

      <div>
            {Blob({
              divId: "dough",
              blobHref: "/dough",
              title: "Our Dough"
            })}
            {Blob({
              divId: "pino",
              blobHref: "/pino",
              title: "Pino Empanadas"
            })}
            {Blob({
              divId: "vege",
              blobHref: "/vege",
              title: "Vegetarian Empanadas"
            })}
            {Blob({
              divId: "quesos",
              blobHref: "/quesos",
              title: "Tres Quesos Empanadas"
            })}
      </div>




      <div id="rain-animation"></div>
      <Script type="module" src="/rainMaker.js" />
    </>
  );
}

export default HomePage;


