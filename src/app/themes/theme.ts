import { alpha, createTheme } from '@mui/material/styles';
const violetBase = '#7F00FF';

const moTheme = createTheme({
  palette: {
    primary: {
      main: violetBase,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
    },
    secondary: {
      main: '#5b5b5b',
    },
    background: {
      // default: '#f8fafc',
    },
  },
});

export default moTheme;
