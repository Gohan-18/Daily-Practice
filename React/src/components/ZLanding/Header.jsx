import { AppBar, Avatar, Box, Container, Typography } from "@mui/material";

const Header = () => {

  const user = null;

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
              gap: 3,
            }}
          >
            <Typography
              sx={{
                color: '#333',
                fontWeight: 600,
                fontSize: "16px",
                cursor: 'pointer',
                borderBottom: '3px solid #33333300',
                transition: 'all 300ms',
                "&:hover": {
                  borderBottom: '3px solid #333'
                },
                // mr: '10px'
              }}
            >
              Docs
            </Typography>
            <Typography
              sx={{
                color: '#333',
                fontWeight: 600,
                fontSize: "16px",
                cursor: 'pointer',
                borderBottom: '3px solid #33333300',
                transition: 'all 300ms',
                "&:hover": {
                  borderBottom: '3px solid #333'
                },
                // mr: '10px'
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
                borderRadius: '10px',
                border: '1px solid #333',
                cursor: 'pointer',
                fontSize: "16px",
                py: '4px'
              }}
            >
              Create your poster
            </Typography>
            {user && <Avatar alt="Remy Sharp" src=""/>}
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
