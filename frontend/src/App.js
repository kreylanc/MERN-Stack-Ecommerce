import Header from "./components/Header";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";
import Footer from "./components/Footer";

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
}));

function App() {
  return (
    <StyledBox>
      <Header />
      <Container>
        <Typography variant="h1">henlo</Typography>
      </Container>
      <Footer />
    </StyledBox>
  );
}

export default App;
