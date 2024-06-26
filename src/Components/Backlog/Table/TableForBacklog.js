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
  Badge,
} from '@chakra-ui/react';

import axios from 'axios';
import { useState } from 'react';
import API from '../../../Config/Config';
import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import EditTicket from './EditTicket/EditTicket';
import ViewTicket from './ViewTicket/ViewTicket';

function TableForBacklog({ setRefresh, data }) {
  const toast = useToast();

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState(0);

  const updateTicket = id => {
    const payload = {
      ticketStatus: 'todo',
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
        setRefresh();
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

  const openEditModal = id => {
    setSelectedTicketId(id);
    setEditModalOpen(true);
  };

  const openViewModal = id => {
    setSelectedTicketId(id);
    setViewModalOpen(true);
  };

  const closeModals = () => {
    setEditModalOpen(false);
    setViewModalOpen(false);
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
            {data.map(item => {
              return (
                <>
                  {item.ticketStatus === 'created' && (
                    <Tr key={item._id}>
                      <Td>{item.ticketName}</Td>
                      <Td>{new Date(item.createdAt).toLocaleDateString()}</Td>
                      <Td
                        color={
                          item.ticketStatus === 'created' ? 'grey' : 'white'
                        }
                        fontWeight={'bold'}
                      >
                        <Badge>{item.ticketStatus}</Badge>
                      </Td>
                      <Td>
                        <EditIcon
                          _hover={{ cursor: 'pointer' }}
                          onClick={() => {
                            openEditModal(item._id);
                          }}
                        />
                      </Td>
                      <Td>
                        <ViewIcon
                          _hover={{ cursor: 'pointer' }}
                          onClick={() => {
                            openViewModal(item._id);
                          }}
                        />
                      </Td>
                      <Td>
                        <Button onClick={() => updateTicket(item._id)}>
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
                  )}
                </>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>

      <EditTicket
        onClose={closeModals}
        isOpen={editModalOpen}
        id={selectedTicketId}
      />
      <ViewTicket
        onClose={closeModals}
        isOpen={viewModalOpen}
        id={selectedTicketId}
      />
    </>
  );
}

export default TableForBacklog;
