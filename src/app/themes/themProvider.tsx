// src/providers/AppThemeProvider.tsx
'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import moTheme from './theme';

export default function AppThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={moTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
