import * as React from 'react';
import { theme } from '../../styles';
import { ThemeProvider } from '@emotion/react';
import { MainLayout } from '../../layouts';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout />
    </ThemeProvider>
  );
}
