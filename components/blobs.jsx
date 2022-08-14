import Blob from './blob';
import { Box, Grid } from '@mui/material';

export const Blobs = (props) => {

  return (


      <Grid
        direction="row"
  justifyContent="center"
  alignItems="baseline"
        container
        columnSpacing={{ md: 8, xl: 16}}
      >
        {Blob({
          divId: "empanadas",
          blobHref: "/about/#ourMenu",
          title: "Our Empanadas"
        })}
        {Blob({
          divId: "events",
          blobHref: "/about/#eventInfo",
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
