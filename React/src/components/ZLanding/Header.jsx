import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";

const Header = () => {
  const user = null;
  const [menuTrigger, setMenuTrigger] = useState(false);
  // const navItems = ["Docs", "Samples", "Create Your Poster", "Sign Up"];

  const BiggerDisplayNav = () => (
    <Box
      sx={{
        display: { xs: "none", sm: "flex" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 2, md: 3 },
      }}
    >
      <Typography
        sx={{
          color: "#333",
          fontWeight: 600,
          fontSize: "16px",
          cursor: "pointer",
          borderBottom: "3px solid #33333300",
          transition: "all 300ms",
          "&:hover": {
            borderBottom: "3px solid #333",
          },
        }}
      >
        Docs
      </Typography>
      <Typography
        sx={{
          color: "#333",
          fontWeight: 600,
          fontSize: "16px",
          cursor: "pointer",
          borderBottom: "3px solid #33333300",
          transition: "all 300ms",
          "&:hover": {
            borderBottom: "3px solid #333",
          },
        }}
      >
        Samples
      </Typography>
      <Typography
        sx={{
          bgcolor: "#333",
          color: "#f4f4f4",
          px: "15px",
          "&:hover": {
            bgcolor: "#333",
          },
          borderRadius: "10px",
          border: "2px solid #333",
          cursor: "pointer",
          fontSize: "16px",
          py: "4px",
        }}
      >
        Create your poster
      </Typography>
      {user ? (
        <Avatar alt="Remy Sharp" src="" />
      ) : (
        <Typography
          sx={{
            color: "#333",
            px: "15px",
            "&:hover": {
              bgcolor: "#333",
              color: "#f4f4f4",
            },
            borderRadius: "10px",
            border: "2px solid #333",
            cursor: "pointer",
            fontSize: "16px",
            py: "4px",
            transition: "all 300ms",
          }}
        >
          Sign Up
        </Typography>
      )}
    </Box>
  );

  

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          height: "80px",
          bgcolor: "#f4f4f4",
          display: "flex",
          alignItems: "space-between",
          justifyContent: "center",
          zIndex: 999,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ color: "#333", fontWeight: 600, fontSize: "25px" }}>
            ZYNG
          </Typography>
          <BiggerDisplayNav />
          {/* <SmallerDisplayNav/> */}
          <IconButton
            size="small"
            aria-label="menu"
            sx={{
              display: { xs: "flex", sm: "none" },
              color: "#333",
              padding: "8px",
            }}
            onClick={() => {
              setMenuTrigger(!menuTrigger);
            }}
          >
            {menuTrigger ? <MenuIcon /> : <CloseRoundedIcon />}
          </IconButton>
        </Container>
      </AppBar>
      <Box sx={{ display: { xs: "flex", sm: "none" } }}>
        <Box
          sx={{
            height: menuTrigger ? "0px" : "100vh",
            width: "100%",
            position: "fixed",
            top: 0,
            right: 0,
            left: 0,
            bgcolor: "#f4f4f4",
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: menuTrigger ? 0 : 3,
            transition: 'all 500ms',
            borderBottom: '5px solid #333'
          }}
        >
          
          <Typography
            sx={{
              color: "#333",
              fontWeight: 600,
              fontSize: "16px",
              cursor: "pointer",
              borderBottom: "3px solid #33333300",
              transition: "all 300ms",
              "&:hover": {
                borderBottom: "3px solid #333",
              },
            }}
          >
            Docs
          </Typography>
          <Typography
            sx={{
              color: "#333",
              fontWeight: 600,
              fontSize: "16px",
              cursor: "pointer",
              borderBottom: "3px solid #33333300",
              transition: "all 300ms",
              "&:hover": {
                borderBottom: "3px solid #333",
              },
            }}
          >
            Samples
          </Typography>
          <Typography
            sx={{
              color: "#333",
              fontWeight: 600,
              fontSize: "16px",
              cursor: "pointer",
              borderBottom: "3px solid #33333300",
              transition: "all 300ms",
              "&:hover": {
                borderBottom: "3px solid #333",
              },
            }}
          >
            Create Your Poster
          </Typography>
          <Typography
            sx={{
              color: "#333",
              fontWeight: 600,
              fontSize: "16px",
              cursor: "pointer",
              borderBottom: "3px solid #33333300",
              transition: "all 300ms",
              "&:hover": {
                borderBottom: "3px solid #333",
              },
            }}
          >
            Sign Up
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Header;
