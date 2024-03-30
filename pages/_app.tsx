import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { lightThemePalette } from '../styles/theme';
import { fontSize } from '../styles/font';
import { Global, Theme, ThemeProvider } from '@emotion/react';
import { globalStyles } from '../styles/globalStyles';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider
      theme={
        {
          fontSize,
          // fontFamily: fonts,
          color: lightThemePalette,
          // device,
          // media,
        } as Theme
      }
    >
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
