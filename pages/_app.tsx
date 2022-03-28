import '../styles/main.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Auth0Provider } from '@auth0/auth0-react';
import { useEffect } from 'react';
import ErrorBoundary from '../components/error-boundary';

function MyApp({ Component, pageProps }: AppProps) {
  let redirectUri: string;
  useEffect(() => { redirectUri = window.location.origin; }, []);

  return (
    <ErrorBoundary>
      <Auth0Provider
        domain="egmncyln.us.auth0.com"
        clientId="346PbsY9q9TxyZQyfzJhJ5c9PXbWWfm1"
        redirectUri={redirectUri}
      >
        <Head>
          <title>Wordy App</title>
          <link rel='icon' href='/favicon.ico' />
          {/* <script src='scripts/attach-voice.js'></script> */}
          {/* <script src='scripts/event-listeners.js'></script> */}
        </Head>
        <Component {...pageProps} />
      </Auth0Provider>
    </ErrorBoundary>
  );
}

export default MyApp;