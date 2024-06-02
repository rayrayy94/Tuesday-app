import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Badge,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function CustomMenu({ primaryStatus, updateTicketStatus, id }) {
  const [menuItems, setMenuItems] = useState([
    'todo',
    'inprogress',
    'rework',
    'completed',
  ]);
  return (
    <div>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          color={
            primaryStatus === 'todo'
              ? 'grey'
              : primaryStatus === 'inprogress'
              ? 'blue'
              : primaryStatus === 'rework'
              ? 'crimson'
              : 'limegreen'
          }
        >
          {primaryStatus.toUpperCase()}
        </MenuButton>

        <MenuList>
          {menuItems.map(item => {
            return (
              <MenuItem onClick={() => updateTicketStatus(item, id)}>
                <Badge
                  bgColor={
                    item === 'todo'
                      ? 'grey'
                      : item === 'inprogress'
                      ? 'blue'
                      : item === 'rework'
                      ? 'crimson'
                      : 'limegreen'
                  }
                >
                  {item.toUpperCase()}
                </Badge>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
}
