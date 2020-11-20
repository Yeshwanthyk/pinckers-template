import React from 'react';
import { Box, Flex, List, Icon, Text } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import siteData from '../../siteData';

const SideNav = () => {
  return (
    <Box as="nav">
      <Flex flexDirection="column">
        <Box mb={8} width={['5rem', '10rem']}>
          <Link href="/">
            <a>{siteData.author.toUpperCase()}</a>
          </Link>
        </Box>
        <List>
          {siteData.projects.map((project) => {
            {
              return (
                <Box
                  as="li"
                  key={project.slug}
                  textTransform="capitalize"
                  mb={2}
                  fontSize="0.75rem"
                  mb={3}
                  _hover={{ color: '#ff0a78' }}
                >
                  <Link
                    href={{
                      pathname: '/projects/[project]',
                      query: { project: project.slug },
                    }}
                  >
                    <a>{project.name}</a>
                  </Link>
                </Box>
              );
            }
          })}
        </List>
        <Flex mt="2rem" mb={1}>
          <Link href={`https://www.instagram.com/${siteData.instagram}`}>
            <a>
              <Icon as={FaInstagram} mr={2} />
            </a>
          </Link>
          <Link href={`https://www.facebook.com/${siteData.facebook}`}>
            <a>
              <Icon as={FaFacebookF} />
            </a>
          </Link>
        </Flex>
        <Text fontSize="8px" mt={1}>{`© 2020 ${siteData.author} `}</Text>
      </Flex>
    </Box>
  );
};

export default SideNav;
