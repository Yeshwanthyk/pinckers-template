import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'lato',
      },
      a: {
        color: 'teal.500',
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <>
          <CSSReset />
          <Box paddingX={4} maxWidth="90%" marginX="auto" marginY={12}>
            <Component {...pageProps} />
          </Box>
        </>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
