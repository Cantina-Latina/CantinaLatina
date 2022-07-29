import Link from 'next/link';
import Fab from '@mui/material/Fab';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box, Grid } from '@mui/material';


const Blob = (props) => {

  return (
    <Grid item  >
      <Box>
        <Box id={props.divId} sx={{
          height: { xs: '100px', sm: '150px', md: '200px', xl: '250px' },
          width: { xs: '100px', sm: '150px', md: '200px', xl: '250px' }
        }}></Box>
      </Box>
      <Link href={props.blobHref}>
        <Box  sx={{ paddingLeft: 12 }}>
          <Fab className="nav-item" variant="extended" size="medium" color="primary" aria-label="add">
            <ChevronLeftIcon sx={{ mr: 1, color: '#FFFFFF' }}></ChevronLeftIcon>{props.title}
          </Fab>
        </Box>

      </Link>
    </Grid>
  );
}


export default Blob;
