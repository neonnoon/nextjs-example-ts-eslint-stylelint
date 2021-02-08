import React from 'react';
import '../styles/globals.css';

import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) : React.ReactElement {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default App;
