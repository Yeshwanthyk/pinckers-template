import React from 'react';
import { Box, Flex, List, Icon, Text, useColorMode } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaSun, FaMoon } from 'react-icons/fa';
import Link from 'next/link';
import siteData from '../../siteData';

const SideNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="nav">
      <Flex flexDirection="column">
        <header>
          <Box mb={8} width={['5rem', '10rem']}>
            <Link href="/">
              <a>{siteData.author.toUpperCase()}</a>
            </Link>
          </Box>
        </header>
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
        <Flex mt="2rem" mb={6}>
          <Box mr={6}>
            <Link
              href={`https://www.instagram.com/${siteData.instagram}`}
              passHref
            >
              <a aria-label="instagram link">
                <Icon as={FaInstagram} />
              </a>
            </Link>
          </Box>
          <Link href={`https://www.facebook.com/${siteData.facebook}`} passHref>
            <a aria-label="facebook link">
              <Icon as={FaFacebookF} />
            </a>
          </Link>
        </Flex>

        {colorMode === 'dark' ? (
          <Icon my={2} onClick={toggleColorMode} as={FaSun} />
        ) : (
          <Icon my={1} onClick={toggleColorMode} as={FaMoon} />
        )}

        <Text fontSize="8px" mt={4}>{`© 2020 ${siteData.author} `}</Text>
      </Flex>
    </Box>
  );
};

export default SideNav;
