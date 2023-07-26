import { AppBar, Box, Button, Container, Typography } from "@mui/material";

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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Button
              size="small"
              sx={{
                // bgcolor: "#333",
                color: "#333",
                px: "15px",
                "&:hover": {
                  bgcolor: "#f4f4f4",
                  // borderBottom: 
                  // color: '#f4f4f4'
                },
                // "&::after": {
                //   content: '""',
                //   display: 'block',
                //   bgcolor: '#333',
                //   width: '100%',
                //   height: '4px'
                // }
              }}
            >
              Docs
            </Button>
            <Button
              size="small"
              sx={{
                bgcolor: "#333",
                color: "#f4f4f4",
                px: "15px",
                "&:hover": {
                  bgcolor: "#333",
                },
                borderRadius: '10px',
                border: '1px solid #333'
              }}
            >
              Samples
            </Button>
            <Button
              size="small"
              sx={{
                bgcolor: "#333",
                color: "#f4f4f4",
                px: "15px",
                "&:hover": {
                  bgcolor: "#333",
                },
                borderRadius: '10px',
                border: '1px solid #333'
              }}
            >
              Create your poster
            </Button>
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
