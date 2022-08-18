import { useEffect } from 'react';
import '../styles/globals.scss';
import '../styles/blob.scss';

import React from 'react';
//import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../components/layout'
import '@fontsource/titan-one/400.css';
import '@fontsource/mouse-memoirs/400.css';
import '@fontsource/quicksand';
import "@fontsource/source-sans-pro";
import { ParallaxProvider } from 'react-scroll-parallax';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const headFooterColor = '#403103';
  const headFooterFontColor = '#CC9C0A';
  const headFooterLinkColor = '#E38D2B';

  let theme = createTheme({
    typography: {
      fontFamily: 'quicksand'
    },
    palette: {
      headfoot: {
        main: headFooterFontColor,
        headFooterColor: headFooterColor,
        headFooterFontColor: headFooterFontColor,
        headFooterLinkColor: headFooterLinkColor
      }
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: headFooterColor,
          }
        }
      },
       
      MuiTypography: {
        styleOverrides: {
          root: {
            margin: '10px 0 30px 0 !important',
            //color: "#272100"
          },
          h2: {
            fontFamily: "'Mouse Memoirs'",
            fontWeight: 'lighter'
          },
          h3: {
            fontFamily: "'Mouse Memoirs'",
            fontWeight: 'lighter',
            paddingTop: '20px',
            marginBottom: '0 !important'
          },
          h4: {
            fontFamily: "'Mouse Memoirs'",
            fontWeight: 'lighter'
          },
          h5: {
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 'bolder',
            fontSize: 'large',
            marginBottom: '0 !important' 
          },
          h6: {
            fontFamily: '"Source Sans Pro", sans-serif',
            fontSize: 'normal',
            fontWeight: 'bolder'
          },
          cute: {
            fontFamily: '"helvetica", sans-serif',
            fontSize: 'normal',
            fontWeight: 'bolder'
          }
        },
        variants: [
          {
            props: { variant: 'cramped' },
            style: {
              margin: '10px 0 10px 0 !important',
              display: 'block'
            },
          },
        ]
      },
    }
  });


  theme = responsiveFontSizes(theme);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Cantina Latina - Hobart Tasmania</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" sizes="32x32" href="/favicon.ico" />
      </Head>
      <ParallaxProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          
            <Component {...pageProps} />
          
        </Layout>
      </ThemeProvider>
      </ParallaxProvider>
    </React.Fragment>
  );
}

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   pageProps: PropTypes.object.isRequired,
// };