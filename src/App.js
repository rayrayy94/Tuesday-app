import { Grid, GridItem } from '@chakra-ui/react';

import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';

function App() {
  return (
    <>
      <Navbar />

      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem
          as="aside"
          bg="gray.700"
          colSpan={{ base: 6, lg: 2, xl: 1 }}
          height={{ base: '10vh', lg: '90vh' }}
          paddingTop={3}
          paddingLeft={5}
        >
          <Sidebar />
        </GridItem>
        <GridItem
          as="main"
          bg="teal.200"
          colSpan={{ base: 6, lg: 4, xl: 5 }}
          height={{ base: '90vh' }}
        >
          <Main />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
