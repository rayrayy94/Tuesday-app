import { Badge, Box, Flex, Heading } from '@chakra-ui/react';
import axios from 'axios';
import API from '../../Config/Config';
import { useEffect, useState } from 'react';

function Board() {
  const [tickets, setTickets] = useState([]);

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
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      <Flex width={'100%'} h={'84vh'} margin={'auto'}>
        <Box flex={'1'} borderRight={'1px solid black'}>
          <Box bg={'#cdcdcd'} w={'100%'} height={50}>
            <Flex justify={'center'} align={'center'} height={'100%'}>
              <Heading size={'sm'}>ToDo</Heading>
            </Flex>
          </Box>

          <Box h={'100%'} w={'100%'} p={5} overflow={'auto'}>
            {tickets.map(item => {
              return (
                <>
                  {item.ticketStatus === 'todo' && (
                    <Box
                      w={'100%'}
                      h={250}
                      p={5}
                      mt={3}
                      borderRadius={10}
                      bg={'#bcbcbc'}
                    >
                      <Box w={'fit-content'} margin={'auto'}>
                        <img
                          src={item.images[0]}
                          alt="ticket"
                          width={100}
                          height={100}
                        />
                      </Box>
                      <Flex justifyContent={'space-between'} align={'center'}>
                        <Heading size={'sm'}> {item.ticketName} </Heading>
                        <Badge>{item.ticketStatus}</Badge>
                      </Flex>
                      <p>
                        {item.description.length > 50
                          ? item.description.slice(0, 50) + '...'
                          : item.description}
                      </p>
                      <br />
                      <p>
                        Created At:{' '}
                        {new Date(item.createdAt).toLocaleDateString()}{' '}
                      </p>
                    </Box>
                  )}
                </>
              );
            })}
          </Box>
        </Box>

        <Box flex={'1'} borderRight={'1px solid black'}>
          <Box bg={'#cdcdcd'} w={'100%'} height={50}>
            <Flex justify={'center'} align={'center'} height={'100%'}>
              <Heading size={'sm'}>In Progress</Heading>
            </Flex>
          </Box>

          <Box h={'100%'} w={'100%'} p={5} overflow={'auto'}>
            {tickets.map(item => {
              return (
                <>
                  {item.ticketStatus === 'inprogress' && (
                    <Box
                      w={'100%'}
                      h={250}
                      p={5}
                      mt={3}
                      borderRadius={10}
                      bg={'#bcbcbc'}
                    >
                      <Box w={'fit-content'} margin={'auto'}>
                        <img
                          src={item.images[0]}
                          alt="ticket"
                          width={100}
                          height={100}
                        />
                      </Box>
                      <Flex justifyContent={'space-between'} align={'center'}>
                        <Heading size={'sm'}> {item.ticketName} </Heading>
                        <Badge>{item.ticketStatus}</Badge>
                      </Flex>
                      <p>
                        {item.description.length > 50
                          ? item.description.slice(0, 50) + '...'
                          : item.description}
                      </p>
                      <br />
                      <p>
                        Created At:{' '}
                        {new Date(item.createdAt).toLocaleDateString()}{' '}
                      </p>
                    </Box>
                  )}
                </>
              );
            })}
          </Box>
        </Box>

        <Box flex={'1'} borderRight={'1px solid black'}>
          <Box bg={'#cdcdcd'} w={'100%'} height={50}>
            <Flex justify={'center'} align={'center'} height={'100%'}>
              <Heading size={'sm'}>Rework</Heading>
            </Flex>
          </Box>

          <Box h={'100%'} w={'100%'} p={5} overflow={'auto'}>
            {tickets.map(item => {
              return (
                <>
                  {item.ticketStatus === 'rework' && (
                    <Box
                      w={'100%'}
                      h={250}
                      p={5}
                      mt={3}
                      borderRadius={10}
                      bg={'#bcbcbc'}
                    >
                      <Box w={'fit-content'} margin={'auto'}>
                        <img
                          src={item.images[0]}
                          alt="ticket"
                          width={100}
                          height={100}
                        />
                      </Box>
                      <Flex justifyContent={'space-between'} align={'center'}>
                        <Heading size={'sm'}> {item.ticketName} </Heading>
                        <Badge>{item.ticketStatus}</Badge>
                      </Flex>
                      <p>
                        {item.description.length > 50
                          ? item.description.slice(0, 50) + '...'
                          : item.description}
                      </p>
                      <br />
                      <p>
                        Created At:{' '}
                        {new Date(item.createdAt).toLocaleDateString()}{' '}
                      </p>
                    </Box>
                  )}
                </>
              );
            })}
          </Box>
        </Box>

        <Box flex={'1'} borderRight={'1px solid black'}>
          <Box bg={'#cdcdcd'} w={'100%'} height={50}>
            <Flex justify={'center'} align={'center'} height={'100%'}>
              <Heading size={'sm'}>Completed</Heading>
            </Flex>
          </Box>

          <Box h={'100%'} w={'100%'} p={5} overflow={'auto'}>
            {tickets.map(item => {
              return (
                <>
                  {item.ticketStatus === 'completed' && (
                    <Box
                      w={'100%'}
                      h={250}
                      p={5}
                      mt={3}
                      borderRadius={10}
                      bg={'#bcbcbc'}
                    >
                      <Box w={'fit-content'} margin={'auto'}>
                        <img
                          src={item.images[0]}
                          alt="ticket"
                          width={100}
                          height={100}
                        />
                      </Box>
                      <Flex justifyContent={'space-between'} align={'center'}>
                        <Heading size={'sm'}> {item.ticketName} </Heading>
                        <Badge>{item.ticketStatus}</Badge>
                      </Flex>
                      <p>
                        {item.description.length > 50
                          ? item.description.slice(0, 50) + '...'
                          : item.description}
                      </p>
                      <br />
                      <p>
                        Created At:{' '}
                        {new Date(item.createdAt).toLocaleDateString()}{' '}
                      </p>
                    </Box>
                  )}
                </>
              );
            })}
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Board;
