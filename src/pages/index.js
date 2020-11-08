import { Box, Flex, List, ListItem } from '@chakra-ui/core';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import siteData from '../../siteData';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>MP Portfolio</title>
        <link rel="icon" href="../src/assets/favicon.ico" />
      </Head>

      <Flex>
        <Flex flexBasis="10rem" flexGrow="1">
          <Box as="nav">
            <Flex flexDirection="column">
              <Box>YK</Box>
              {siteData.map((project, index) => {
                {
                  return (
                    <List>
                      <ListItem>
                        <Link href={`projects/${project.name}`}>
                          <a>{project.name}</a>
                        </Link>
                      </ListItem>
                    </List>
                  );
                }
              })}
            </Flex>
          </Box>
        </Flex>
        <Flex flexDirection="column" flexBasis="0" flexGrow="999" ml={8}>
          <Flex>
            <Box> Prev</Box>
            <Box> | </Box>
            <Box> Next</Box>
          </Flex>
          <Image src="/briefly/test_1.jpg" width="400px" height="600px" />
        </Flex>
      </Flex>
    </Box>
  );
}
