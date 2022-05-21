import '../styles/main.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Wordy App</title>
        <link rel='icon' href='/favicon.ico' />
        {/* <script src='scripts/attach-voice.js'></script> */}
        {/* <script src='scripts/event-listeners.js'></script> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
