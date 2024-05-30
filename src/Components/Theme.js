import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f4e1ff', // Custom primary color
    },
    secondary: {
      main: '#4caf50', // Custom secondary color
    },
    error: {
      main: '#f44336', // Custom error color
    },
    warning: {
      main: '#ff9800', // Custom warning color
    },
    info: {
      main: '#90caf9', // Custom info color
    },
    success: {
      main: '#f4e1ff', // Custom success color
    },
    custom: {
      main: '#123456', // Custom color
    },
  },
});

export default theme;
