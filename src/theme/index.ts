import { createTheme } from "@mui/material";

export const gray = {
  100: "#F8F8F8", // Lightest gray — backgrounds
  200: "#DCDCDC", // Light gray — borders, dividers
  300: "#00000066", // Medium-light — secondary text, muted labels (40% black)
  400: "#999999", // Medium gray — primary labels, form hints
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#E77B75",
      contrastText: "#FFFFFF",
      light: "#FFD6DC",
    },
    // TODO : We can add more if we have secondary color, error , warning in design moving ahead
    background: {
      default: "#FFFFFF",
      paper: gray[100],
    },
    text: {
      primary: "#000000",
      secondary: gray[300],
      muted: gray[400],
    },
    divider: gray[200],
  },

  typography: {
    fontFamily: "'Lato', sans-serif",
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontSize: "40px",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "18px",
      fontWeight: 400,
    },
    body1: {
      fontSize: "18px",
      fontWeight: 400,
    },
    body2: {
      fontSize: "16px",
      fontWeight: 500,
    },
    button: {
      fontSize: "18px",
      fontWeight: 600,
    },
  },

  spacing: 8,

  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        outlined: {
          border: "none", 
        },
      },
    },
  },
  
  
});

export default theme;
