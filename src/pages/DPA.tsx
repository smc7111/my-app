//import React from 'react';
import React, { useRef, useEffect } from 'react';
import {
  ChakraProvider, Grid, Box, Text, Image, useDisclosure, extendTheme, Flex, Divider, Link, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, HStack, ModalFooter, VStack
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon, ArrowUpIcon, DownloadIcon } from '@chakra-ui/icons';

// Import images
import DPACoverphoto from '../assets/DPA images/DPA Cover photo.png';
import PhoneImages from '../assets/DPA images/Phone images.png';
import ActionImage from '../assets/DPA images/action section image.png';
import Personas from '../assets/DPA images/DPA_Personas.png';
import Mountains from '../assets/DPA images/Mountains.png';
import LCM from '../assets/DPA images/Lifecycle email clickable image.png';
import FandangoImage from '../assets/DPA images/Fandango clickable image 2.png';
import Footer from '../components/Footer';

function DPA() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    const goToPage = useNavigate();
    const homePageClick = () => {
      goToPage('/')
  };


 // Globally defined scrollToMiddle function
const scrollToMiddle = () => {
  const middle = document.documentElement.scrollHeight / 2 -90;
  window.scrollTo({
    top: middle,
    behavior: 'smooth',
  });
};

const goToWork = () => {
  goToPage('/'); // Navigate to the homepage

  // Use a timeout to ensure the page has a chance to load before scrolling
  setTimeout(scrollToMiddle, 500); // Adjust the timeout as needed
};

  
  

  const goToEmails = () => {
    goToPage('/emails');
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const goToFandango = () => {
    goToPage('/fandango');
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  

    // Theme customization for breakpoints
    const theme = extendTheme({
      breakpoints: {
        sm: '320px',
        md: '768px',
        lg: '0px',
        xl: '1200px',
        '2xl': '1536px',
      },
    });

    // Responsive font sizes
    const responsiveFontSize = ['2xl', '3xl', '4xl', '5xl', '6xl'];
  

    return (
    <ChakraProvider theme={theme}>
      {/* Navigation and Hero Section */}
      <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }} templateRows="auto 1fr" h="100vh">
  {/* Hero Section */}
  <Flex
    as="nav"
    gridRow="1 / 2"
    gridColumn="1 / 2"
    bg="#00A3FF"
    color="white"
    justifyContent="space-between"
    alignItems="center"
    px={4}
  >
    {/* Flex container for SC and My Work to group them together */}
    <Flex align="center" paddingTop={'6'}>
      <Link onClick={homePageClick} style={{ textDecoration: 'none' }} _hover={{ textDecoration: 'none' }} fontSize="lg" fontWeight="bold" mr={4}>SC</Link> {/* Added margin-right to space between SC and My Work */}
      <Link onClick={goToWork}>my work</Link>
    </Flex>
  </Flex>

        {/* Text Section */}
        <Flex
          gridRow="2 / 3"
          gridColumn="1 / 2"
          bg="#00A3FF"
          color="white"
          p={8}
          direction="column"
          justify="center"
          zIndex="1" // Ensure text content is above the image
        >
          <HStack spacing={4}>

            {/* General Info */}
            <Box
            mb={4}
            
            >
            
            <Text
            fontWeight={'bold'}
            fontSize={responsiveFontSize}>
                ConnectPaws Mobile App
                </Text>
              
            
              <Text fontSize="lg" paddingLeft={2}>
              UX/UI Design   |   Non-Profit   |   Prototype
              </Text>
             
            

            </Box>
          </HStack>
          {/* Social Icons */}
          <Flex mt={4} justify="center">
            {/* Your social icons here */}
          </Flex>
        </Flex>
        {/* Image Section */}
        <Box
          gridRow="1 / 3"
          gridColumn="2 / 3"
          position="relative"
          width="100%"
          height="100vh"
          bgGradient="linear(to-br, #FFFFFF, #FFFFFF, #00A3FF, #646464)"
        >
          <Image
            src={DPACoverphoto}
            position="absolute"
            width="100%"
            height="100%"
            objectFit="cover" 
            alt="cover image of ConnectPaws Mobile App" 
          />
        </Box>
      </Grid>

      {/* Problem Section */}
      <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }} p={8} bg="#98B5D8" color="white" alignItems="start">
        <Box>
          <Image my={{sm: '-20' , md: '-20'}} alt="cover photo of app showing messages screen" src={PhoneImages} fit="cover" w="100%" h="auto" />
        </Box>
        <Box 
        my={{sm: '8' , md: '20'}} paddingRight={{xl: '100'}}>
          <Text fontSize={responsiveFontSize} fontWeight="bold"
          >Problem</Text>
          <Divider borderColor="white" />
          <Text fontSize="lg">
          Dallas Pets Alive (DPA), a non-profit organization run predominantly by passionate volunteers, is grappling with a communication shortfall due to the absence of a dedicated mobile application. Operating mainly through emails, Google Drive, and social media channels like Facebook, the organization is in dire need of a streamlined solution. My prototype aims to bridge this gap by serving as a central platform—fostering seamless interaction between volunteers and leadership, facilitating the sharing of resources, and coordinating upcoming events.          
          </Text>
          <Text paddingTop={'4'} fontSize="lg" fontStyle={'italic'}>
          How might I design an intuitive platform for DPA volunteers and leadership to easily access and share information, engage with the community, and coordinate efforts—all from one app?          </Text>
        </Box>
      </Grid>


      {/* Actions Section */}
      <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }} p={8} bg="#98B5D8" color="white">
      {/* Image Box - Ensure this is first in the source order */}
      <Box order={{ md: 2 }}  onClick={onOpen} cursor="zoom-in">
        <Image my={{sm: '0', md: '0', lg:'-400', xl:'-100', '2xl':'-300'}} 
        src={Personas} objectFit="cover" width="100%" height="auto" alt="primary and secondary personas" />
      </Box>

      <Modal isOpen={isOpen} size="full" onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#98B5D8">
          <ModalCloseButton />
          <ModalBody>
            <Flex  justify="center" align="center" h="100%">
              <Image src={Personas} maxW="100%" maxH="100%" />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Text Box - Adjust the order for desktop view to bring it to the left */}
      <Box my={{sm:'100', md: '-50' }} paddingLeft={{xl: '100'}}>
        <Text fontSize={responsiveFontSize} fontWeight="bold">Actions</Text>
        <Divider borderColor="white" />
        <Text fontSize="lg">
        Drawing inspiration from established social media platforms, the DPA app aligns with familiar structures to create an intuitive user experience. Informed by several peer reviews, each iteration of the app saw improvements in icon placement, informational architecture, and the overall flow of the prototype. This iterative design process was enriched by incorporating feedback from distinct user personas such as Sam, a fostering volunteer, and Joe, a leadership employee, ensuring the app meets diverse needs.        
        </Text>
        <Text fontSize="lg" paddingTop={'4'}>
        While initially targeting Dallas-based users, research revealed that a small but significant number of volunteers are dispersed throughout the United States. This discovery prompted a more inclusive design approach, mirroring user-friendly aspects of popular mobile apps like LinkedIn and Canvas Student. Despite time constraints limiting the scope of our initial research phase, further user research and interviews, particularly with users like Sam and Joe, could significantly refine the app's features and functionality.       
         </Text>
      </Box>
    </Grid>

      {/* Results Section */}
      <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }} gap={0} p={8} bg="#98B5D8" color="white">
  <Box my={{sm: '-130', md: '20'}} width="100%" height={{ base: "100vh", md: "500px", lg: "800px", xl:"800" }} position="relative">
  <iframe
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FuQgRBAZ0o4pz7bxCiHfRcM%2FWireframe%3Fpage-id%3D33%253A1152%26node-id%3D33-4643%26viewport%3D3944%252C1236%252C1%26t%3DYbg30cvezzRh1VuB-1%26scaling%3Dscale-down%26starting-point-node-id%3D33%253A4643%26mode%3Ddesign%26hide-ui=1"
    allowFullScreen
    width="100%"
    height="100%"
    style={{ position: 'absolute', left: 0, top: 0 }}
  ></iframe>
</Box>

      <Box
      my={{sm: '40' , md: '250'}}
      paddingRight={{xl: '100'}}
      >
        <Text fontSize={responsiveFontSize} fontWeight="bold">Lessons Learned</Text>
        <Divider borderColor="white" />
        <Text fontSize="lg">
        This project illuminated the intricate and iterative nature of the design process, offering firsthand experience in navigating the complexities of application development and wireframing. The reliance on existing platforms, such as LinkedIn, underscored the need for constant reference and awareness of design nuances. It reinforced the dichotomy of user experience – seamless design often goes unnoticed, while flaws stand out glaringly. This journey provided profound insights into the art of crafting a user-friendly mobile application and the importance of continuous improvement.        </Text>
      </Box>
    </Grid>

  {/* Lessons Learned text */}
    <Flex
      bg="#98B5D8"
      color="white"
      p={8}
      justify="center" // Center content horizontally
      alignItems="center" // Center content vertically
      zIndex="1" // Ensure text content is above the image
      direction="column"
      textAlign="center" // Center text horizontally within the Flex container
    >
    <Box
      bg="#98B5D8"
      color="white"
      p={8}
      zIndex="1" // Ensure text content is above the image
      my={{sm: '-200' , md: '-40'}}
    >
      <Text fontSize={responsiveFontSize} fontWeight="bold" mb={4}>
        Next Steps
      </Text>

      <Text fontSize="lg" mb={4} paddingLeft={{xl: '100'}} paddingRight={{xl: '100'}}>
      While the current iteration remains a prototype, it stands poised for further development. Rigorous feedback loops, incorporating insights from multiple peer evaluations, have enhanced the app's user-centric attributes. Iterative adjustments have not only improved its usability but positioned it for future refinement.    
      </Text>
      </Box>

    {/* Image Section (Mountains Picture) */}
    <Box mt={8}
    my={{sm: '200' , md: '200'}}
    >
      <Image
        src={Mountains}
        width="100%"
        height="auto" // Make the height auto to maintain aspect ratio
        objectFit="cover"
        alt="divider mountain-like graphic"
      />
    </Box>
  </Flex>



     {/* Fandango and LCM Project Previews */}
     <Grid
        h="auto" // Change the height to auto for mobile view
        templateColumns={{ sm: '1fr', md: '1fr' }}
        templateRows={{ sm: 'auto', md: '1fr' }} // Adjusted templateRows for mobile view
        bg="#98B5D8"
          >
  {/* Text */}
  <Flex
    bg="#98B5D8"
    color="white"
    p={8}
    justify="center" // Center content horizontally
    alignItems="center" // Center content vertically
    zIndex="1" // Ensure text content is above the image
    direction="column"
    textAlign="center" // Center text horizontally within the Flex container
    my={{sm: '-60', md: '-100'}}
  >
    <Box
      bg="#98B5D8"
      color="#333333"
      p={8}
      zIndex="1" // Ensure text content is above the image
      fontWeight={'bold'}
      fontSize={{sm: 'lg', md:'2xl'}}
    >
      <Text> 
        Check out more of my projects
      </Text> 
    </Box>

    {/* Images Section */}
    <Flex
      direction={{ sm: 'column', md: 'row' }} // Flex direction changes based on screen size
      justify="center"
      alignItems="center"
      textAlign="center"
      
    >
      {/* DPA Image and Text */}
      <Box  mx={{ sm: 'auto', md: 20 }} mb={{ sm: 8, md: 0 }}> {/* Center both horizontally in mobile view and add margin between images */}
      <Link onClick={goToEmails} style={{ textDecoration: 'none' }}>
        <Image
          src={LCM}
          width="100%"
          height="auto" // Make the height auto to maintain aspect ratio
          objectFit="cover"
          cursor="pointer"
          alt="Lifecycle Emails clickable image"
        />
        <Text
          mt={4}
          textAlign="center"
          textColor="#333333"
          fontWeight="semibold"
          cursor="pointer"
        >
          Lifecycle Emails
        </Text>
        </Link>
      </Box>

      {/* Fandango Image and Text */}
      <Box mx={{ sm: 'auto', md: 20 }} mb={{ sm: 8, md: 0 }}> {/* Center both horizontally in mobile view and add margin between images */}
      <Link onClick={goToFandango} style={{ textDecoration: 'none' }}>
        <Image
          src={FandangoImage}
          width="100%"
          height="auto" // Make the height auto to maintain aspect ratio
          objectFit="cover"
          cursor="pointer"
          alt="Fandango clickable image"
        />
        <Text
          mt={4}
          textAlign="center"
          textColor="#333333"
          fontWeight="semibold"
          cursor="pointer"
        >
          Fandango App <br /> Research Analysis
        </Text>
        </Link>
      </Box>
    </Flex>
 
  </Flex>
  <Box
  my={{sm: '130', md: '0'}}
  maxH={{sm: '10vh', md:'auto'}}
  >
   <Footer />
   </Box>

</Grid>

    </ChakraProvider>
    );
}
export default DPA;