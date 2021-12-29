import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Product from "../components/Product";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    //fetch products list from the api
    const response = await axios.get("/api/products");

    setProducts(response.data);
  };

  return (
    <Container sx={{ backgroundColor: "primary.main", p: 4 }}>
      <Typography variant="h4">LATEST PRODUCTS</Typography>
      <Grid
        container
        spacing={2}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ my: 1 }}
      >
        {products.map((product, index) => (
          <Grid key={index} item xs={2} sm={4} md={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomeScreen;
