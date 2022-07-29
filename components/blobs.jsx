import Blob from './blob';
import { Grid } from '@mui/material';

export const Blobs = (props) => {


  // Material-UI v4 relied on JSS and the makeStyles hook for component styling.
  //  MUI v5 has migrated to two options: styled API or sx API (<- definitely read this). 
  // The styled API creates a new component that can easily be exported, 
  // and usage of the component is very clean with less inline prop code. 
  // The sx prop is a superset of CSS that include built-in shorthands (i.e. mt={2} sets margin-top).

  // todo fix the layout
  // the 'blobs' need to flexed 
  // https://blog.devgenius.io/how-to-use-the-sx-prop-in-mui-v5-4ccfd588836


  return (

    <div>
      <Grid
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        container
      >
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
      </Grid>
    </div>
  );
}
