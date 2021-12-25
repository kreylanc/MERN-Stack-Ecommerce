import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import ItemRating from "./ItemRating";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

const Product = ({ product }) => {
  return (
    <Card
      color="primary"
      sx={{
        backgroundColor: "white",
        minHeight: 300,
      }}
    >
      <Link
        component={RouterLink}
        to={`/product/${product._id}`}
        sx={{ color: "secondary.main", textDecoration: "none" }}
      >
        <CardMedia
          component="img"
          image={product.image}
          sx={{
            objectFit: "contain",
            height: 150,
          }}
        />
        <CardContent>
          <Typography variant="h6" sx={{ fontSize: "16px", minHeight: 50 }}>
            {product.name}
          </Typography>
          <ItemRating
            ratingValue={product.rating}
            text={`${product.numReviews} reviews`}
          />

          <Typography
            variant="h5"
            sx={{
              mt: 2,
              fontWeight: "bold",
            }}
          >
            ${product.price}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default Product;
