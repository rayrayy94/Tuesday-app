import { Box, Flex, Heading } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

function Backlog() {
  return (
    <Box>
      <Flex p={30} align={'center'} gap={2}>
        <AddIcon />
        <Heading size={'lg'} fontWeight={400}>
          Backlog / Create A Ticket
        </Heading>
      </Flex>
    </Box>
  );
}

export default Backlog;
