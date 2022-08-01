import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {

    
    let isHomePage = (children.type.name == "HomePage");

    const renderHeader = () => {
      if (isHomePage) {
        return <Header />;

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
            <main >{children}</main>
            <Footer />
        </>
    )
}