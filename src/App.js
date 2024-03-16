import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Sidebar />
    </ChakraProvider>
  );
}

export default App;
