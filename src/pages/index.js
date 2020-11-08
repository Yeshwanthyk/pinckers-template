import { Box, Flex, List, ListItem } from '@chakra-ui/core';
import Head from 'next/head';
import MainGallery from '../components/MainGallery';
import SideNav from '../components/SideNav';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>MP Portfolio</title>
        <link rel="icon" href="../src/assets/favicon.ico" />
      </Head>

      <Flex>
        <Flex flexBasis="10rem" flexGrow="1">
          <SideNav />
        </Flex>
        <Flex flexDirection="column" flexBasis="0" flexGrow="999" ml={8}>
          <MainGallery />
        </Flex>
      </Flex>
    </Box>
  );
}
