/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { MainMap } from '../../modules';
import styles from './styles';

export function HomePage() {
  return (
    <Box css={styles.homePage}>
      <Typography color="textPrimary" variant="h6" sx={{ ml: '20px', mb: '25px', fontWeight: 800 }}>
        Home Page
      </Typography>
      <MainMap />
    </Box>
  );
}
