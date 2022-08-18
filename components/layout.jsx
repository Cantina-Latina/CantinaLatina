import Header from './header'
import Footer from './footer'
import { Box } from '@mui/material';

export default function Layout({ children }) {

    
    let isHomePage = (children.type.name == "DemoPage");

    const renderHeader = () => {
      if (isHomePage) {
        return <Header
        picaroCss='margin-top: 20px;' 
        />;
      } 
      else {
        return <Header
          stackDirection="row" 
          backgroundPos='0 5%' 
          picaroSize='110px'
          picaroCss='margin-top: 20px;' // any additional valid CSS
        />;

      }
    }


    return (
        <>
            {renderHeader()}
            <Box 
                id="pagelayoutContainer"
                //display="flex" 
                sx={{
                  // justifyContent: 'center',
                  // textAlign: 'inherit',
                  // position: 'relative',
                  //padding: "40px 90px",
                  //minHeight: '600px',
                  backgroundColor: '#e5e5e5',
                  //transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                  //boxShadow: '0px 2px 4px 1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%)'
                }}> 

              {children}

            </Box >

            <Footer />
        </>
    )
}