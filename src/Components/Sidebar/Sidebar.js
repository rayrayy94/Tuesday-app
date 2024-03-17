import { Box, Flex, Link } from '@chakra-ui/react';
import { GoHome } from 'react-icons/go';
import { CalendarIcon } from '@chakra-ui/icons';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <Box className={styles.linkBox}>
      <Link _hover={'none'}>
        <Box color={'white'} fontSize={{ base: 'xl', lg: '2xl' }}>
          <Flex align={'center'}>
            <GoHome className={styles.dashboardIcon1} />
            Dashboard
          </Flex>
        </Box>
      </Link>

      <Link _hover={'none'}>
        <Box
          color={'white'}
          fontSize={{ base: 'xl', lg: '2xl' }}
          marginTop={2}
          marginLeft={0.5}
        >
          <Flex align={'center'}>
            <CalendarIcon className={styles.dashboardIcon2} />
            My Work
          </Flex>
        </Box>
      </Link>
    </Box>
  );
}

export default Sidebar;
