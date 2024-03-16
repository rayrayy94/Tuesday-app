import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

function Sidebar() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={5}>
      <GridItem as="aside" colSpan={1} bg="gray.100" height="100vh">
        <span>Aside</span>
      </GridItem>
    </Grid>
  );
}

export default Sidebar;
