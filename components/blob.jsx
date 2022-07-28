import Link from 'next/link';
import Fab from '@mui/material/Fab';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Blob = (props) => {

  return (
    <span className="blobs">
      <div id={props.divId}></div>
      <Link href={props.blobHref}>
        <Fab className="nav-item" variant="extended" size="medium" color="primary" aria-label="add">
          <ChevronLeftIcon sx={{ mr: 1, color: '#FFFFFF' }}></ChevronLeftIcon>{props.title}
        </Fab>
      </Link>
    </span>
  );
}


export default Blob;
