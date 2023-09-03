import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
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
