import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import API from '../../../Config/Config';
import { EditIcon } from '@chakra-ui/icons';

function TableForBacklog() {
  const [tickets, setTickets] = useState([]);
  const toast = useToast();

  useEffect(() => {
    getTickets();
  }, []);

  const getTickets = () => {
    axios
      .get(`${API.apiUri}/get-ticket`)
      .then(res => {
        console.log(res.data);
        setTickets(res.data);
      })
      .catch(e => console.log(e));
  };

  const updateTicket = (id, status) => {
    const payload = {
      status: !status,
    };
    axios
      .patch(`${API.apiUri}/update-ticket/${id}`, payload)
      .then(res => {
        console.log(res);
        toast({
          title: 'Ticket Started',
          description: 'Board has been updated',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      })
      .catch(e => console.log(e));
  };

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Your Backlog</TableCaption>
          <Thead>
            <Tr>
              <Th>Ticket Name</Th>
              <Th>Created At</Th>
              <Th>Status</Th>
              <Th>Action</Th>
              <Th>Manage</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tickets.map(item => {
              return (
                <Tr key={item._id}>
                  <Td>{item.ticketName}</Td>
                  <Td>{new Date(item.createdAt).toLocaleDateString()}</Td>
                  <Td
                    color={item.ticketStatus === 'ToDo' ? 'grey' : 'white'}
                    fontWeight={'bold'}
                  >
                    {item.ticketStatus}
                  </Td>
                  <Td>
                    <EditIcon />
                  </Td>
                  <Td>
                    <Button onClick={() => updateTicket(item._id, item.status)}>
                      Start Work
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableForBacklog;
