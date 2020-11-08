import { Box } from '@chakra-ui/core';
import React from 'react';
import { useRouter } from 'next/router';

const ProjectPage = () => {
  const router = useRouter();
  const { project: projectName } = router.query;

  return <Box>{projectName}</Box>;
};

export default ProjectPage;
