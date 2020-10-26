import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import {
  ThemeProvider as ChakraProvider,
  CSSReset,
  Box,
} from '@chakra-ui/core';
import { theme } from '@chakra-ui/core';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <>
          <CSSReset />
          <Box padding={8} maxWidth="80%" margin="auto">
            <Component {...pageProps} />
          </Box>
        </>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
