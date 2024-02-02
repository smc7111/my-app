import React from 'react';
import { ChakraProvider, Box, Text, Button, Image, Flex, IconButton, Link, VStack, HStack, useBreakpointValue, useColorModeValue, Card } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon, ChevronUpIcon, ChevronDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import Lifecycle1 from '../assets/projectLifecycle.png'; 
import EmailCycle from '../assets/LifecycleEmail.png'

import DPA from '../assets/projectDpa.png'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
interface ProjectShowcaseProps {
    title: string;
    description: string;
    imageUrl: string;
    onNext: () => void;
    onPrev: () => void;
    projectId: string; // Add this line
  }
  
  const imageMap: Record<string, any> = {
    '1': Lifecycle1,
    '2': DPA,
    '3': EmailCycle,
  };
  const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ title, description, onNext, projectId,onPrev, imageUrl }) => {

    const scrollToTop = () => {
      window.scrollTo({
        top: 0, // Adjustc this value if you want to scroll to a different part of the page
        behavior: 'smooth',
      });
    };
    const iconBgColor = useColorModeValue('gray.800','white');
    const textColor = useColorModeValue('gray.700', 'white');

    const resolvedImageUrl = imageMap[projectId as keyof typeof imageMap] || imageUrl;

    const imageSize = useBreakpointValue({ base: "100%", md: "60%", lg:"65%" });

      const boxSize = useBreakpointValue({ base: "60%", md: "60%" });
      const titleSize = useBreakpointValue({ base: "xl", md: "4xl" }); // Adjust title size
      const descSize = useBreakpointValue({ base: "sm", md: "md" }); // Adjust description size

    
    return (
      <ChakraProvider>
      <Box 
        h="100vh" 
        p={4} 
        color="white" 
        display="flex" 
        flexDirection="column" 
        justifyContent="center" 
        alignItems="center"
        style={{
          background: "linear-gradient(135deg, #D6BCFA 25%, #FCEEB5 100%)"
        }}
      >
 
        <Flex direction="column" align="center" mb={2}>
        <IconButton
          aria-label="Go to top"
          icon={<ArrowUpIcon />}
          onClick={scrollToTop}
          variant="solid"
          size="lg"
          color={'white'}
         
          backgroundColor={iconBgColor}
          _hover={{ bg: 'purple.600', color: 'white' }} // Hover effect
          shadow="md" // Subtle shadow for depth
          mb={4} // Margin bottom for spacing
        />
        <Text mb={6} fontSize={{ base: "xl", md: "4xl" }} fontWeight="bold" color={textColor}>
        The Story Behind the Projects
        </Text>
       
     
      
          <Flex align="center" mb={2}>
            
            <IconButton
              aria-label="Previous project"
              icon={<ChevronLeftIcon />}
              onClick={onPrev}
              variant="ghost"
              colorScheme="purple"
              mr={2}
            />

<Text fontSize={titleSize} fontWeight="bold" mb={4}>{title}</Text>

            <IconButton
              aria-label="Next project"
              icon={<ChevronRightIcon />}
              onClick={onNext}
              variant="ghost"
              colorScheme="purple"
              ml={2}
            />
          </Flex>
          <Text fontSize={descSize} mb={8}>{description}</Text>
          <Button colorScheme="#A0AEC0" variant="solid" mt={4}>View Project</Button>
        </Flex>

        {/* Image */}
        <Box flex="1" w={imageSize} >
        <Flex align="center" mb={2}>
        <Image src={resolvedImageUrl} objectFit="contain" w={imageSize} maxH="100vh" />
        </Flex>

        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default ProjectShowcase;
