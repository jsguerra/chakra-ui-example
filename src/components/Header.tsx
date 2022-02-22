import { Box, Container, Heading, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <header>
      <Box bg="blue.500" mb="7">
        <Container maxW="container.lg">
          <Heading as="h1">The Title</Heading>
          <Text>Hello World!</Text>
        </Container>
      </Box>
    </header>
  );
};

export default Header;
