import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import TableForBacklog from './Table/TableForBacklog';
import HamburgerMenu from './Menu/HamburgerMenu';
import { useEffect, useReducer, useState } from 'react';
import API from '../../Config/Config';
import axios from 'axios';

function Backlog() {
  const [refresh, setRefresh] = useReducer(x => x + 1, 0);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getTickets();
  }, [refresh]);

  const getTickets = () => {
    axios
      .get(`${API.apiUri}/get-ticket`)
      .then(res => {
        console.log(res.data);
        setTickets(res.data);
      })
      .catch(e => console.log(e));
  };

  return (
    <Box>
      <Box>
        <Flex p={50} align={'center'} gap={2}>
          <AddIcon />
          <Heading size={'lg'} fontWeight={400}>
            Backlog / Create A Ticket
          </Heading>
          <Spacer />

          <HamburgerMenu setRefresh={setRefresh} />
        </Flex>
      </Box>

      <Box p={10}>
        <TableForBacklog setRefresh={setRefresh} data={tickets} />
      </Box>
    </Box>
  );
}

export default Backlog;
