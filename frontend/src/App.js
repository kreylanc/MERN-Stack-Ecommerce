import Header from "./components/Header";

import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

function App() {
  return (
    <Router>
      <StyledBox>
        <Header />
        <Container
          // maxWidth="xl"
          sx={{
            mb: 5,
          }}
        >
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="product/:id" element={<ProductScreen />} />
          </Routes>
        </Container>
        <Footer />
      </StyledBox>
    </Router>
  );
}

export default App;
