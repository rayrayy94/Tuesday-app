import {
  Badge,
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useToast,
} from '@chakra-ui/react';

import axios from 'axios';
import API from '../../../../Config/Config';
import './Form.css';
import { useState } from 'react';

function Form({ onClose }) {
  let [images, setImages] = useState([]);
  const toast = useToast();

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
      images,
    };

    axios
      .post(`${API.apiUri}/create-ticket`, addTicketData)
      .then(res => {
        console.log(res.data);
        toast({
          title: 'Ticket Created',
          description: "We've added your ticket to the backlog",
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        onClose();
      })
      .catch(e => {
        console.log(e);
        toast({
          title: 'Something Went Wrong',
          description: 'Try Again',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      });
  }

  const uploadFile = e => {
    let files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      (function (file) {
        var reader = new FileReader();
        reader.onload = () => {
          if (images.length < 6) {
            setImages(prevState => [...prevState, reader.result]);
          }
        };
        reader.readAsDataURL(file);
      })(files[i]);
    }
  };

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
        <FormLabel fontSize={14}>Upload Images (0-6)</FormLabel>
        <Input
          type="file"
          name="images"
          id="images"
          border={'none'}
          onChange={uploadFile}
        />
        <br />
        <br />

        <Box>
          <Flex gap={5} flexWrap="wrap">
            {images.length > 0 ? (
              <>
                {images.map(item => {
                  return (
                    <Box>
                      <img
                        src={item}
                        alt="tickets"
                        multiple
                        accept="images/*"
                        style={{
                          borderRadius: '10px',
                          border: '2px solid black',
                          padding: '5px',
                          height: '125px',
                          width: '150px',
                        }}
                      />
                    </Box>
                  );
                })}
              </>
            ) : null}
          </Flex>
        </Box>

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
          <Button
            variant="ghost"
            mr={3}
            className="ghostBTN"
            onClick={addTicket}
          >
            Create
          </Button>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </Flex>
      </Box>
    </>
  );
}

export default Form;
