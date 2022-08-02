import { useEffect } from 'react';
import '../styles/blob.scss';

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../components/layout'
import { purple } from '@mui/material/colors';
import '@fontsource/titan-one/400.css';
import '@fontsource/mouse-memoirs/400.css';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const theme = createTheme({

    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: "#190c01"
          }
        }
      },
       
      MuiTypography: {
        styleOverrides: {
          root: {
            margin: '10px 0 30px 0 !important' 
          },
          h2: {
            fontFamily: "'Mouse Memoirs', cursive",
            fontWeight: 'lighter'
          },
          h3: {
            fontFamily: "'Mouse Memoirs', cursive",
            fontWeight: 'lighter'
          },
          h4: {
            fontFamily: "'Mouse Memoirs', cursive",
            fontWeight: 'lighter'
          },
          h5: {
            fontFamily: "'Mouse Memoirs', cursive",
            margin: '0 !important' 
          }
        }
      },
      
    },
    palette: {
      primary: {
        // todo not working for Fab !!!.
        main: purple[500],
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
      buttons: {
        main: '#cc9631',
      },
    }
  });

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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};