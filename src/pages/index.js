import { Box, Flex } from '@chakra-ui/react';
import MainGallery from '../components/MainGallery';
import Meta from '../components/Meta';
import SideNav from '../components/SideNav';

export default function Home() {
  return (
    <>
      <Meta />
      <Box>
        <Flex>
          <Flex flexBasis={['4rem', '6rem', '10rem']} flexGrow="1">
            <SideNav />
          </Flex>
          <Flex flexDirection="column" flexBasis="0" flexGrow="999" ml={6}>
            <MainGallery />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
