import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';
import { ChakraProvider } from '@chakra-ui/react';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  // const getLayout = Component.getLayout || ((page) => page);
  // getLayout(<Component {...pageProps} />);
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
