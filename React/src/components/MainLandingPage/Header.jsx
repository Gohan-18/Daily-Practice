import {
  AppBar,
  Container,
  Typography,
} from "@mui/material";

const Header = () => {
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
            HOME
          </Typography>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
