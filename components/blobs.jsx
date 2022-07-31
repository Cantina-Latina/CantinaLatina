import Blob from './blob';
import { Box, Grid } from '@mui/material';
import { red } from '@mui/material/colors';

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

    <Box sx={{
      backgroundColor: "#ecece3",
      paddingBottom: "60px",
      paddingRight: "80px"
      }}>
      <Grid
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        container
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
    </Box>
  );
}
