import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { tokens } from '../../theme';
import { Box, Icon, IconButton, Typography, useTheme } from '@mui/material';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import OutdoorGrillOutlined from '@mui/icons-material/OutdoorGrillOutlined';
import PersonOutlined from '@mui/icons-material/PersonOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onclick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

function SideNavbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');
  return (
    // SIDENAVBAR styling to override pro-sidebar defaults
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `${colors.primary[400]} !important`,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important',
        },
      }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}

          {/* WHEN NOT COLLAPSED */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: '10px 0 20px 0', color: colors.grey[100] }}
          >
            {/* SHOWS HAMBURGER ICON AND TYPOGRAPHY WHEN IS COLLAPSED */}
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                marginLeft="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  RECETAS MOREIRAS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
        </Menu>

        {/* USER */}
        {!isCollapsed && (
          <Box marginBottom="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={'../public/logo192.png'}
                style={{ cursor: 'pointer', borderRadius: '50%' }}
              />
            </Box>

            <Box textAlign="center">
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ margin: '10px 0 0 0' }}
              >
                Camila Moreiras
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                Software Engineer
              </Typography>
            </Box>
          </Box>
        )}
        {/* MENU ITEMS */}
        <Box paddingLeft={isCollapsed ? undefined : '10%'}>
          <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlined />}
            selected={selected}
            setSelected={setSelected}
          />
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ margin: '15px 0 5px 20px' }}
          >
            Recipe Box
          </Typography>
          <Item
            title="Manage Recipes"
            to="/recipes"
            icon={<OutdoorGrillOutlined />}
            selected={selected}
            setSelected={setSelected}
          />
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ margin: '15px 0 5px 20px' }}
          >
            Admin
          </Typography>
          <Item
            title="Admin"
            to="/admin"
            icon={<PersonOutlined />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      </Sidebar>
    </Box>
  );
}

export default SideNavbar;
