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
                sx={{
                  backgroundColor: '#e5e5e5',
                }}> 

              {children}

            </Box >

            <Footer />
        </>
    )
}