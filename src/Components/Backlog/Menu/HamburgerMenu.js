import { Box } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import { AddIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';

import Form from './Form/Form';

function HamburgerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function closeModal() {
    onClose(true);
  }

  return (
    <>
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<AddIcon />} onClick={onOpen}>
              Create A Ticket
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={'xl'}
        scrollBehavior={'inside'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> New Ticket</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form onClose={closeModal} />
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button> */}
            {/* <Button variant="ghost" className="ghostBTN" onClick={addTicket}>
              Create
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default HamburgerMenu;
