import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
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
import { useEffect, useRef, useState } from 'react';
import { apiUri } from '../../../../Config/Config';

function ViewTicket({ isOpen, onClose, id }) {
  const tickerNameRef = useRef();
  const ticketDescriptionRef = useRef();
  const [ticketStatus, setTicketStatus] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUri}/get-ticket/${id}`)
      .then(res => {
        tickerNameRef.current.value = res.data.ticketName;
        ticketDescriptionRef.current.value = res.data.description;
        setTicketStatus(res.data.ticketStatus);
        setImages([...res.data.images]);
      })
      .catch(e => console.log(e));
  }, [id]);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={'xl'}
        scrollBehavior={'inside'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> View Ticket</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Flex justify={'flex-end'}>
                <Badge colorScheme="red" fontSize={'0.8em'}>
                  {ticketStatus.toUpperCase()}
                </Badge>
              </Flex>
              <FormLabel fontSize={14}>Ticket Name :</FormLabel>
              <Input
                type="text"
                name="ticketName"
                id="ticketName"
                placeholder="Ticket Name"
                ref={tickerNameRef}
              />
              <br />
              <br />
              <FormLabel fontSize={14}>Ticket Description :</FormLabel>
              <Textarea
                name="description"
                id="description"
                placeholder="Description"
                ref={ticketDescriptionRef}
              ></Textarea>
              <br />
              <br />
              <FormLabel fontSize={14}>Uploaded Images</FormLabel>

              <br />

              <Box>
                <Flex gap={5} flexWrap="wrap">
                  {images.length > 0 ? (
                    <>
                      {images.map((item, index) => {
                        return (
                          <Box key={index}>
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
                            <Button
                              onClick={() =>
                                setImages(images.filter(e => e !== images))
                              }
                            >
                              Remove
                            </Button>
                          </Box>
                        );
                      })}
                    </>
                  ) : (
                    <p>No Images Uploaded</p>
                  )}
                </Flex>
              </Box>

              <br />

              <Box>
                <Heading size={'sm'}> Activity :</Heading>
                <Badge colorScheme="green">Comments</Badge>
                <br />
                <br />
              </Box>
              <br />
              <Flex justify={'flex-end'}>
                <Button variant="ghost" className="ghostBTN" onClick={onClose}>
                  Close
                </Button>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ViewTicket;
