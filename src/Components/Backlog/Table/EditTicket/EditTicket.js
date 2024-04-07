import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useToast,
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
import './EditTicket.css';

function EditTicket({ isOpen, onClose, id }) {
  const ticketNameRef = useRef();
  const ticketDescriptionRef = useRef();
  const [ticketStatus, setTicketStatus] = useState('');
  const [images, setImages] = useState([]);
  const toast = useToast();

  useEffect(() => {
    axios
      .get(`${apiUri}/get-ticket/${id}`)
      .then(res => {
        ticketNameRef.current.value = res.data.ticketName;
        ticketDescriptionRef.current.value = res.data.description;
        setTicketStatus(res.data.ticketStatus);
        setImages([...res.data.images]);
      })
      .catch(e => console.log(e));
  }, [id]);

  function saveTicket() {
    const ticketName = ticketNameRef.current?.value;
    const description = ticketDescriptionRef.current?.value;
    const imageCopy = [...images];

    const payload = {
      ticketName,
      description,
      images: imageCopy,
    };

    axios
      .patch(`${apiUri}/update-ticket/${id}`, payload)
      .then(res => {
        console.log(res);
        toast({
          title: 'Ticket Updated',
          description: 'You have successfully updated the ticket',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        onClose();
      })
      .catch(e => console.log(e));
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
    <div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={'xl'}
        scrollBehavior={'inside'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Edit Ticket</ModalHeader>
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
                ref={ticketNameRef}
                defaultValue={ticketNameRef.current?.value}
              />
              <br />
              <br />
              <FormLabel fontSize={14}>Ticket Description :</FormLabel>
              <Textarea
                name="description"
                id="description"
                placeholder="Description"
                ref={ticketDescriptionRef}
                defaultValue={ticketDescriptionRef.current?.value}
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
                                setImages(images.filter(e => e !== item))
                              }
                              className="removeBTN"
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
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={() => saveTicket(id)}
                >
                  Save
                </Button>
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

export default EditTicket;
