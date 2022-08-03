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
          blobHref: "/about/#empanadas",
          title: "Our Empanadas"
        })}
        {Blob({
          divId: "events",
          blobHref: "/about/#events",
          title: "Events"
        })}
        {Blob({
          divId: "pebre",
          blobHref: "/about/#pebre-menu",
          title: "Pebre - Chili Sauce"
        })}
        {Blob({
          divId: "dough",
          blobHref: "/about#dough-menu",
          title: "Our Dough"
        })}
      </Grid>
  );
}
