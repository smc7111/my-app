import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChakraProvider, Box, Text,  Button, Image, Flex,  IconButton,  useBreakpointValue, useColorModeValue, Divider, Link} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, ArrowUpIcon } from '@chakra-ui/icons';
import projectsData from '../assets/projects.json';
import DPAImage from '../assets/Email images/DPA clickable image.png';
import LCM from '../assets/DPA images/Lifecycle email clickable image.png';
import FandangoImage from '../assets/DPA images/Fandango clickable image 2.png';

interface ProjectShowcaseProps {
  title: string;
  description: string;
  imageUrl: string;
  onNext: () => void;
  onPrev: () => void;
  projectId: number;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  title,
  description,
  onNext,
  onPrev,
  projectId,
  imageUrl,
}) => {
  const navigate = useNavigate();

  const currentProject = projectsData.find(project => project.projectId === projectId);

  const handleViewProjectClick = () => {
    if (currentProject && currentProject.path) {
      navigate(currentProject.path);
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const iconBgColor = useColorModeValue('#333333', 'white');
  const textColor = useColorModeValue('#333333', 'white');

  // Using an object for imageMap instead of Map constructor for simplicity
  const imageMap: Record<number, string> = {
    1: DPAImage,
    2: LCM,
    3: FandangoImage,
  };

  const resolvedImageUrl = imageMap[projectId] || imageUrl;

  const imageSize = useBreakpointValue({ base: '100%', md: '50%', lg: '60%' });

  const titleSize = useBreakpointValue({ base: 'xl', md: '4xl' });
  const descSize = useBreakpointValue({ base: 'sm', md: 'md' });

  return (
    <ChakraProvider>
      <Box
        h="auto"
        p={30}
        color="white"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg="#98B5D8"
      >
        <Flex direction="column" align="center">
          <IconButton
            aria-label="Go to top"
            icon={<ArrowUpIcon />}
            onClick={scrollToTop}
            variant="solid"
            size="lg"
            color="white"
            backgroundColor={iconBgColor}
            _hover={{ bg: 'white', color: '#333333' }}
            shadow="md"
            mb={2}
          />
          <Text mb={20} fontSize={{ base: 'xl', md: '4xl' }} fontWeight="bold" color={textColor}>
            The Person Behind the Projects
          </Text>
          <Text maxW="600px" fontWeight={'bold'} fontSize={{sm: 'large', md: 'x-large'}} mb={8} textColor="#333333">
              {title}
            </Text>
        </Flex>

        <Flex align="center" mb={2}>
       
          <IconButton
            aria-label="Previous project"
            icon={<ChevronLeftIcon />}
            onClick={onPrev}
            variant="ghost"
            color="#333333"
            mr={2}
            fontSize="5xl"
          />
          <Box flex="1" w={imageSize} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Image
              src={resolvedImageUrl}
              objectFit="contain"
              w={imageSize}
              maxH="50vh"
              rounded="lg"
              mb={5}
              mt={5}
              onClick={handleViewProjectClick}
              cursor="pointer"
            />
            <Text maxW="600px" fontSize="lg" mb={8} textColor="white">
              {description}
            </Text>
          </Box>
          <IconButton
            aria-label="Next project"
            icon={<ChevronRightIcon />}
            onClick={onNext}
            variant="ghost"
            color="#333333"
            ml={2}
            fontSize="5xl"
          />
        </Flex>

        <Button color="#333333" variant="solid" mt={4} mb={10} _hover={{ textColor: 'white', bg: '#333333' }} onClick={handleViewProjectClick}>
          View Project
        </Button>
      </Box>

      <footer>
        <Box bg="#98B5D8">
          <Divider borderColor="#333333" borderWidth="1.5px" borderRadius="full" mx="auto" w="85%" />
        </Box>
        <Flex bg="#98B5D8" justifyContent="center">
          <Box color="black" p={1} textAlign="center">
            <Button color="#333333" variant="solid" mt={20} _hover={{ textColor: 'white', bg: 'gray.700' }}>
            <Link textColor="#33333" href={`${process.env.PUBLIC_URL}/Resume-2.pdf`} isExternal download="Siobhans-Resume.pdf" _hover={{ textColor: 'white', textDecoration: 'none' }}>
            Resume
          </Link>
            </Button>
            <Button color="#333333" variant="solid" mt={20} ml={10} _hover={{ textColor: 'white', bg: 'gray.700' }}>
              <a href="https://www.linkedin.com/in/smc7111/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Text mt={4} ml={1}>
              Visually designed by Siobhan
            </Text>
          </Box>
        </Flex>
      </footer>
    </ChakraProvider>
  );
};

export default ProjectShowcase;
