import React, { useEffect, useState } from 'react';
import { Box, Flex, Image as CImage } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import Image from 'next/image';
import SideNav from '../../components/SideNav';
import siteData from '../../../siteData';

const ProjectPage = () => {
  const [photoIndex, setphotoIndex] = useState(0);
  const [imageNum, setimageNum] = useState(0);
  const [projectDesc, setprojectDesc] = useState('');
  const router = useRouter();

  const { project: projectName } = router.query;

  useEffect(() => {
    if (router.asPath !== router.route) {
      const projectData = siteData.filter(
        (project) => project.name === projectName
      )[0];

      setimageNum(projectData.imageNum);
      setprojectDesc(projectData.desc);
    }
  }, [router]);

  let imageNames = [];
  if (imageNum > 0) {
    for (let i = 1; i <= imageNum; i++) {
      imageNames.push(`/${projectName}/${projectName}_${i}.jpg`);
    }
  }

  const nextImage = () => {
    if (!(photoIndex > imageNum - 2)) {
      setphotoIndex(photoIndex + 1);
    }
  };

  const prevImage = () => {
    if (photoIndex > 0) {
      setphotoIndex(photoIndex - 1);
    }
  };

  return (
    <Flex>
      <Flex flexBasis="10rem" flexGrow="1">
        <SideNav />
      </Flex>
      <Flex flexDirection="column" flexBasis="0" flexGrow="999" ml={8}>
        <Flex mb={2}>
          <Box mr={2}>{`${photoIndex + 1} of ${imageNum}`}</Box>
          <Box mr={1}>
            <button onClick={prevImage}>Prev</button>
          </Box>
          <Box mr={1}> | </Box>
          <Box>
            <button onClick={nextImage}> Next</button>
          </Box>
        </Flex>
        <Box maxW="25vw" mb={8}>
          <CImage src={imageNames[photoIndex]} objectFit="cover" />
        </Box>
        <Box textTransform="capitalize" mb={8}>
          {projectName}
        </Box>
        <Box maxW="50%">{projectDesc}</Box>
      </Flex>
    </Flex>
  );
};

export default ProjectPage;
