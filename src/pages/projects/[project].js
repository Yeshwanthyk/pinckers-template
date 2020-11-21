import React, { useEffect, useState } from 'react';
import { Box, Flex, Image as CImage } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import SideNav from '../../components/SideNav';
import siteData from '../../../siteData';
import PhotoCounter from '../../components/PhotoCounter';
import ProjectImages from '../../components/ProjectImages';

import fs from 'fs';
import path from 'path';
import naturalSort from '../../utils/natural-sort';

const ProjectPage = ({ imageNames }) => {
  const [photoIndex, setphotoIndex] = useState(0);
  const [imageNum, setimageNum] = useState(0);
  const [projectName, setprojectName] = useState('');
  const [projectDesc, setprojectDesc] = useState('');
  const router = useRouter();

  const { project: projectSlug } = router.query;

  useEffect(() => {
    if (router.asPath !== router.route) {
      const projectData = siteData.projects.filter(
        (project) => project.slug === projectSlug
      )[0];

      setimageNum(projectData.imageNum);
      setprojectDesc(projectData.desc);
      setprojectName(projectData.name);
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
      <Flex flexBasis={['4rem', '6rem', '10rem']} flexGrow="1">
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

  imageNames.sort((a, b) => naturalSort(a, b));
  console.log(imageNames);

  return {
    props: {
      imageNames,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { project: 'at-the-edge-of-the-universe' } },
      { params: { project: 'the-white-whale-has-escaped' } },
    ],
    fallback: false,
  };
}

export default ProjectPage;
