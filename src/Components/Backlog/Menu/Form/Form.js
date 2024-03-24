import {
  Badge,
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from '@chakra-ui/react';

import axios from 'axios';
import API from '../../../../Config/Config';
import './Form.css';

function Form({ onClose }) {
  function addTicket() {
    const ticketName = document.getElementById('ticketName').value;
    const description = document.getElementById('description').value;
    const userName = document.getElementById('userName').value;
    const comment = document.getElementById('comment').value;

    let addTicketData = {
      ticketName,
      description,
      userName,
      comment,
    };

    axios
      .post(`${API.apiUri}/create-ticket`, addTicketData)
      .then(() => console.log('Ticket Added'))
      .catch(e => console.log(e));
  }
  return (
    <>
      <Box>
        <Flex justify={'flex-end'}>
          <Badge colorScheme="red" fontSize={'0.8em'}>
            TODO
          </Badge>
        </Flex>
        <FormLabel fontSize={14}>Ticket Name :</FormLabel>
        <Input
          type="text"
          name="ticketName"
          id="ticketName"
          placeholder="Ticket Name"
        />
        <br />
        <br />
        <FormLabel fontSize={14}>Ticket Description :</FormLabel>
        <Textarea
          name="description"
          id="description"
          placeholder="Description"
        ></Textarea>
        <br />
        <br />
        <FormLabel fontSize={14}>Upload Images</FormLabel>
        <Input type="file" name="images" id="images" border={'none'} />
        <br />
        <br />

        <Box>
          <Heading size={'sm'}> Activity :</Heading>
          <Badge colorScheme="green">Comments</Badge>
          <br />
          <br />
          <Input type="text" name="userName" id="userName" placeholder="Name" />
          <br />
          <br />
          <Textarea
            name="comment"
            id="comment"
            placeholder="Your Comments..."
          ></Textarea>
        </Box>
        <br />
        <Flex justify={'flex-end'}>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost" className="ghostBTN" onClick={addTicket}>
            Create
          </Button>
        </Flex>
      </Box>
    </>
  );
}

export default Form;
