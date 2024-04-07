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
  Flex,
  Badge,
  useDisclosure,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';
import API from '../../../Config/Config';
import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import EditTicket from './EditTicket/EditTicket';
import ViewTicket from './ViewTicket/ViewTicket';

function TableForBacklog() {
  const [tickets, setTickets] = useState([]);
  const toast = useToast();
  const [refresh, setRefresh] = useReducer(x => x + 1, 0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id, setId] = useState(0);

  function closeModal() {
    onClose(true);
  }

  useEffect(() => {
    getTickets();
    deleteTicket();
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

  const deleteTicket = id => {
    axios
      .delete(`${API.apiUri}/delete-ticket/${id}`)
      .then(res => {
        console.log(res.data);
        setRefresh();
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
              <Th>Edit</Th>
              <Th>View</Th>
              <Th>Manage</Th>
              <Th>Delete</Th>
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
                    <Badge>{item.ticketStatus}</Badge>
                  </Td>
                  <Td>
                    <EditIcon
                      _hover={{ cursor: 'pointer' }}
                      onClick={() => {
                        onOpen();
                        setId(item._id);
                      }}
                    />
                  </Td>
                  <Td>
                    <ViewIcon
                      _hover={{ cursor: 'pointer' }}
                      onClick={() => {
                        onOpen();
                        setId(item._id);
                      }}
                    />
                  </Td>
                  <Td>
                    <Button onClick={() => updateTicket(item._id, item.status)}>
                      Start Work
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      color={'white'}
                      bg={'darkred'}
                      _hover={{
                        bg: 'red',
                      }}
                      onClick={() => deleteTicket(item._id)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>

      <EditTicket onClose={closeModal} isOpen={isOpen} id={id} />
      <ViewTicket onClose={closeModal} isOpen={isOpen} id={id} />
    </>
  );
}

export default TableForBacklog;
