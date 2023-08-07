import React from 'react';
import {
  Box,
  // IconButton,
  // useTheme,
  // InputBase,
  // Icon,
  Divider,
  List,
  ListItemIcon,
} from '@mui/material';
// import { useContext } from 'react';
// import { ColorModeContext, tokens } from '../../theme';
import OutdoorGrillOutLinedIcon from '@mui/icons-material/OutdoorGrillOutlined';
import AdminOutLinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

function SideNavbar() {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  // const colorMode = useContext(ColorModeContext);
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection={'column'}
      alignItems={'center'}
      sx={{ width: 240, height: '100vh', background: '#3e4396' }}
    >
      <List>
        <ListItemIcon>
          <ListOutlinedIcon />
          This is Hamburger icon just as a menu placeholder
        </ListItemIcon>
      </List>
      <Divider />

      <List>
        <ListItemIcon>
          <AdminOutLinedIcon />
          This is one Admin icon
        </ListItemIcon>
      </List>

      <List>
        <ListItemIcon>
          <OutdoorGrillOutLinedIcon />
          This is an icon representing Recipes
        </ListItemIcon>
      </List>

      <Divider />
      <List>
        <ListItemIcon>
          <AdminOutLinedIcon />
          This is another Admin icon just as a placeholder
        </ListItemIcon>
      </List>
    </Box>
  );
}

export default SideNavbar;
