import React from 'react';
import { Box, Flex, List } from '@chakra-ui/react';
import Link from 'next/link';
import siteData from '../../siteData';
import Logo from './Logo';

const SideNav = () => {
  return (
    <Box as="nav">
      <Flex flexDirection="column">
        <Box mb={8} width="4rem">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </Box>
        <List>
          {siteData.map((project) => {
            {
              return (
                <Box
                  as="li"
                  key={project.name}
                  textTransform="capitalize"
                  mb={2}
                  fontSize="0.75rem"
                  _hover={{ color: '#ff0a78' }}
                >
                  <Link
                    href={{
                      pathname: '/projects/[project]',
                      query: { project: project.name },
                    }}
                  >
                    <a>{project.name}</a>
                  </Link>
                </Box>
              );
            }
          })}
        </List>
      </Flex>
    </Box>
  );
};

export default SideNav;
