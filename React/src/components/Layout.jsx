import {
    Box,
    createTheme,
    CssBaseline,
    ThemeProvider,
  } from "@mui/material";
  import { Outlet } from "react-router-dom";
//   import Navbar from "./Navbar";
//   import Footer from "./Footer";
  
  const Layout = () => {
    const theme = createTheme({
      palette: {
        mode: "light",
      },
    });
  
    return (
      <>
        <ThemeProvider theme={theme}>
          <Box>
            {/* <Navbar /> */}
            <div>
              <CssBaseline />
              <Outlet />
            </div>
          </Box>
          {/* <Footer/> */}
        </ThemeProvider>
      </>
    );
  };
  
  export default Layout;
  