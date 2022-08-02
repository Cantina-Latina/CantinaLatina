import Blob from './blob';
import { Box, Grid } from '@mui/material';
import { red } from '@mui/material/colors';

export const Blobs = (props) => {

  return (

    
      <Grid
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        container
        columnSpacing={{ md: 8, xl: 16}}
      >
        {Blob({
          divId: "empanadas",
          blobHref: "/empanadas",
          title: "Our Empanadas"
        })}
        {Blob({
          divId: "dough",
          blobHref: "/dough",
          title: "Our Dough"
        })}
        {Blob({
          divId: "pebre",
          blobHref: "/pebre",
          title: "Pebre - Chili Sauce"
        })}
      </Grid>
  );
}
