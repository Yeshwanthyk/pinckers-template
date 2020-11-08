import React, { useEffect, useState } from 'react';
import { Box, Flex, Image as CImage } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import SideNav from '../../components/SideNav';
import siteData from '../../../siteData';
import PhotoCounter from '../../components/PhotoCounter';
import ProjectImages from '../../components/ProjectImages';

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

  useEffect(() => {
    const handleRouteChange = (url) => {
      setphotoIndex(0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  let imageNames = [];
  if (imageNum > 0) {
    for (let i = 1; i <= imageNum; i++) {
      imageNames.push(`/${projectName}/${projectName}_${i}.jpg`);
    }
  }

  return (
    <Flex>
      <Flex flexBasis={['4rem', '6rem', '8rem']} flexGrow="1">
        <SideNav />
      </Flex>
      <Flex flexDirection="column" flexBasis="0" flexGrow="999" ml={8}>
        <PhotoCounter
          imageNum={imageNum}
          photoIndex={photoIndex}
          setphotoIndex={setphotoIndex}
        />
        <ProjectImages
          imageNames={imageNames}
          projectName={projectName}
          projectDesc={projectDesc}
          photoIndex={photoIndex}
        />
      </Flex>
    </Flex>
  );
};

export default ProjectPage;
