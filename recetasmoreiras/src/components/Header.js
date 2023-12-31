import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import { tokens } from '../theme';

// eslint-disable-next-line react/prop-types
function Header({ title, subtitle }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box marginBottom="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ marginBottom: '5px' }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Header;
