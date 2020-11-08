import React from 'react';
import { Box, Flex, List, ListItem } from '@chakra-ui/core';
import Link from 'next/link';
import siteData from '../../siteData';
import Logo from './Logo';

const SideNav = () => {
  return (
    <Box as="nav">
      <Flex flexDirection="column">
        <Box mb={10} maxW="50%">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </Box>
        <List>
          {siteData.map((project, index) => {
            {
              return (
                <ListItem key={project.name} mb={1} textTransform="capitalize">
                  <Link
                    href={{
                      pathname: '/projects/[project]',
                      query: { project: project.name },
                    }}
                  >
                    <a>{project.name}</a>
                  </Link>
                </ListItem>
              );
            }
          })}
        </List>
      </Flex>
    </Box>
  );
};

export default SideNav;
