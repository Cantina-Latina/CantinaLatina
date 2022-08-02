import { Box } from '@mui/material';

export const PagesLayoutContainer = ({ children }) => {

  return (
    <>
      
      <Box
        justifyContent="center"
        sx={{
          zIndex: -3,
          padding: "40px 90px",
          minHeight: '600px',
          backgroundColor: '#e5e5e5',
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          boxShadow: '0px 2px 4px 1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%)'
        }}>
        {children}
      </Box>
    </>

  );
}
