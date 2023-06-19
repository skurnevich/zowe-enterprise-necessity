import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          paddingBottom: "18px",
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
        },
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          paddingBottom: "0px",
        },
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          minWidth: "40ch",
          maxWidth: "40ch",
        },
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: '4ch',
        },
      },
    },
  },
});

export default theme;