import {
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Link,
  Avatar,
  AvatarBadge,
  Spacer,
} from '@chakra-ui/react';
import {
  EditIcon,
  RepeatIcon,
  AddIcon,
  HamburgerIcon,
  ExternalLinkIcon,
} from '@chakra-ui/icons';

import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <>
      <Box as="nav" className={styles.navbar}>
        <Flex padding={5}>
          <Box>
            <Flex align={'center'} gap={5}>
              <Box>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    variant="outline"
                  />
                  <MenuList>
                    <MenuItem icon={<AddIcon />} command="⌘T">
                      New Tab
                    </MenuItem>
                    <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                      New Window
                    </MenuItem>
                    <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                      Open Closed Tab
                    </MenuItem>
                    <MenuItem icon={<EditIcon />} command="⌘O">
                      Open File...
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>

              <Heading as={'h1'} size={'2xl'} noOfLines={1} paddingBottom={1.5}>
                Tuesday.com
              </Heading>
            </Flex>
          </Box>

          <Spacer />

          <Box>
            <Flex gap={5} align={'center'}>
              <Box>
                <Link>Home</Link>
              </Box>

              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={
                    <Avatar>
                      <AvatarBadge boxSize="1.25em" bg="green.400" />
                    </Avatar>
                  }
                  variant="outline-none"
                />
                <MenuList>
                  <MenuItem icon={<AddIcon />} command="⌘T">
                    New Tab
                  </MenuItem>
                  <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                    New Window
                  </MenuItem>
                  <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                    Open Closed Tab
                  </MenuItem>
                  <MenuItem icon={<EditIcon />} command="⌘O">
                    Open File...
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <hr />
    </>
  );
}

export default Navbar;
