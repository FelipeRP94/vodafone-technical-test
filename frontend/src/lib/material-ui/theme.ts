import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#000000",
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: "#ee3023",
        },
      },
    },
  },
});
