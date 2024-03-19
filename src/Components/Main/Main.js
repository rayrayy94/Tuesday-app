import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import coverImg from '../../images/tuesday_cover.webp';

function Main() {
  return (
    <Box>
      <Flex justify={'space-around'} align={'center'} minH={'80vh'} pl={30}>
        <Box>
          <Heading as={'h1'} size={{ base: 'md', lg: 'lg' }} minH={90} pb={4}>
            Move fast, stay aligned, and build better - together
          </Heading>

          <Button size={{ base: 'sm', md: 'md' }}>Get Started</Button>
        </Box>
        <Box pl={5}>
          <img src={coverImg} alt="cover" />
        </Box>
      </Flex>
    </Box>
  );
}

export default Main;
