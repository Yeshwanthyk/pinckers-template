import React, { useEffect, useState } from 'react';
import { Box, Flex, Image as CImage } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import SideNav from '../../components/SideNav';
import siteData from '../../../siteData';
import PhotoCounter from '../../components/PhotoCounter';
import ProjectImages from '../../components/ProjectImages';

import fs from 'fs';
import path from 'path';

const ProjectPage = ({ imageNames }) => {
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
    const handleRouteChange = () => {
      setphotoIndex(0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

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
          imageNum={imageNum}
          setphotoIndex={setphotoIndex}
        />
      </Flex>
    </Flex>
  );
};

export async function getStaticProps({ params }) {
  const postsDirectory = `public/${params.project}`;
  const filenames = fs.readdirSync(postsDirectory);

  const imageNames = filenames.map((filename) => {
    const filePath = path.join(`/${params.project}`, filename);

    return filePath;
  });
  return {
    props: {
      imageNames,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { project: 'briefly' } },
      { params: { project: 'basement' } },
    ],
    fallback: false,
  };
}

export default ProjectPage;
