import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { FC, useMemo, useEffect } from 'react';
import { NextUIProvider, createTheme } from '@nextui-org/react';

const theme = createTheme({
  type: 'original',
  theme: {
    colors: {
      background: '#11141F',
    },
    fonts: {
      body: 'Poppins, sans-serif'
    }
  }

})

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
};

export default App
