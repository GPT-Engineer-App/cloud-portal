import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" minH="100vh" bg="brand.700" color="white">
        <Heading as="h1" size="2xl" mb="4">Welcome to GPT Engineer</Heading>
        <Text fontSize="xl" mb="8">Revolutionizing web development with AI-driven solutions.</Text>
        <Button rightIcon={<FaArrowRight />} colorScheme="blue" variant="solid">
          Get Started
        </Button>
      </Flex>
      <Image src="/images/landing-page-hero.jpg" alt="Innovative AI Solutions" />
    </Box>
  );
};

export default Index;