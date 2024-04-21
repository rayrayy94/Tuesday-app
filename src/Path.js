import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Grid, GridItem } from '@chakra-ui/react';

import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';
import Backlog from './Components/Backlog/Backlog';
import Board from './Components/Board/Board';

function Path() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Grid templateColumns="repeat(6, 1fr)">
          <GridItem
            as="aside"
            bg="gray.700"
            colSpan={{ base: 6, md: 1, lg: 1, xl: 1 }}
            minHeight={{ base: '10vh', lg: '90vh' }}
            minW={{ sm: '25vh' }}
            paddingTop={3}
            paddingLeft={5}
            paddingBottom={3}
          >
            <Sidebar />
          </GridItem>
          <GridItem
            as="main"
            colSpan={{ base: 6, md: 5, lg: 5, xl: 5 }}
            height={{ base: '90vh' }}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Main />
                  </>
                }
              />
              <Route
                path="/backlog"
                element={
                  <>
                    {' '}
                    <Backlog />
                  </>
                }
              />
              <Route
                path="/board"
                element={
                  <>
                    {' '}
                    <Board />
                  </>
                }
              />
            </Routes>
          </GridItem>
        </Grid>
      </BrowserRouter>
    </div>
  );
}

export default Path;
