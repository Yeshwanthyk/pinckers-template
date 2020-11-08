import React from 'react';
import { Box, Flex } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import MainGallery from '../../components/MainGallery';
import SideNav from '../../components/SideNav';

const ProjectPage = () => {
  const router = useRouter();
  const { project: projectName } = router.query;

  return (
    <Flex>
      <Flex flexBasis="10rem" flexGrow="1">
        <SideNav />
      </Flex>
      <Flex flexDirection="column" flexBasis="0" flexGrow="999" ml={8}>
        <Flex>
          <Box> Prev</Box>
          <Box> | </Box>
          <Box> Next</Box>
        </Flex>
        <MainGallery />
      </Flex>
    </Flex>
  );
};

export default ProjectPage;
