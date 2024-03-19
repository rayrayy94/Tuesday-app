import { Box, Flex, Link } from '@chakra-ui/react';
import { GoHome } from 'react-icons/go';
import { CalendarIcon } from '@chakra-ui/icons';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <Box className={styles.linkBox} mr={2} pr={12}>
      <Link _hover={'none'} href="/">
        <Box color={'white'} fontSize={{ base: 'xl' }}>
          <Flex align={'center'}>
            <GoHome className={styles.dashboardIcon1} />
            Home
          </Flex>
        </Box>
      </Link>

      <Link _hover={'none'} href="/backlog">
        <Box
          color={'white'}
          fontSize={{ base: 'xl' }}
          marginTop={2}
          marginLeft={0.5}
          marginBottom={2}
        >
          <Flex align={'center'}>
            <CalendarIcon className={styles.dashboardIcon2} />
            Backlog
          </Flex>
        </Box>
      </Link>
    </Box>
  );
}

export default Sidebar;
