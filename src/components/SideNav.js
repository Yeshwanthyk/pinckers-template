import React from 'react';
import { Box, Flex, List, ListItem } from '@chakra-ui/core';
import Link from 'next/link';
import siteData from '../../siteData';

const SideNav = () => {
  return (
    <Box as="nav">
      <Flex flexDirection="column">
        <Box>YK</Box>
        {siteData.map((project, index) => {
          {
            return (
              <List>
                <ListItem>
                  <Link
                    href={{
                      pathname: '/projects/[project]',
                      query: { project: project.name },
                    }}
                  >
                    <a>{project.name}</a>
                  </Link>
                </ListItem>
              </List>
            );
          }
        })}
      </Flex>
    </Box>
  );
};

export default SideNav;
