import React from 'react';
// import { tokens } from '../../theme';
// import { useContext } from 'react';
// import { ColorModeContext } from '../../theme';
import '../global/sideNavbar.css';
import { Box, Divider, List, ListItemIcon } from '@mui/material';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import AdminOutLinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import HamburgerOutlinedIcon from '@mui/icons-material/ListOutlined';

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
      {/* Doubting the need for all these classes. I think that they are overlapping each other and one or more may not be necessary */}
      <List className="sideNavbarListContainer">
        <ListItemIcon className="sideNavbarText">
          <HamburgerOutlinedIcon
            sx={{ fontSize: 26 }}
            className="sideNavbarListIcons"
          />
          This is Hamburger icon just as a menu placeholder
        </ListItemIcon>
      </List>
      <Divider />

      <List className="sideNavbarListContainer">
        <ListItemIcon className="sideNavbarText">
          <AdminOutLinedIcon
            sx={{ fontSize: 26 }}
            className="sideNavbarListIcons"
          />
          This is one Admin icon
        </ListItemIcon>
      </List>

      <List className="sideNavbarListContainer">
        <ListItemIcon className="sideNavbarText">
          <MenuBookOutlinedIcon
            sx={{ fontSize: 26 }}
            className="sideNavbarListIcons"
          />
          This is an icon representing Recipes
        </ListItemIcon>
      </List>

      <Divider />
      <List className="sideNavbarListContainer">
        <ListItemIcon className="sideNavbarText">
          <AdminOutLinedIcon
            sx={{ fontSize: 26 }}
            className="sideNavbarListIcons"
          />
          This is another Admin icon just as a placeholder
        </ListItemIcon>
      </List>
    </Box>
  );
}

export default SideNavbar;
