import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import TableForBacklog from './Table/TableForBacklog';
import HamburgerMenu from './Menu/HamburgerMenu';

function Backlog() {
  return (
    <Box>
      <Box>
        <Flex p={50} align={'center'} gap={2}>
          <AddIcon />
          <Heading size={'lg'} fontWeight={400}>
            Backlog / Create A Ticket
          </Heading>
          <Spacer />

          <HamburgerMenu />
        </Flex>
      </Box>

      <Box p={10}>
        <TableForBacklog />
      </Box>
    </Box>
  );
}

export default Backlog;
