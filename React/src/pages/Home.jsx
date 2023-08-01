import { Box, Container, Link } from "@mui/material"
import Header from "../components/MainLandingPage/Header"
import { useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" >
      <Header/>
      <Box sx={{pt: '100px'}} >
        <Link sx={{cursor: 'pointer'}} onClick={() => {navigate('/zland')}} >ZLanding</Link>
      </Box>
    </Container>
  )
}

export default Home