import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { useParams } from "react-router-dom";
import products from "./../products";
import ItemRating from "../components/ItemRating";
import StyledButton from "../components/StyledButton";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const ProductScreen = () => {
  const params = useParams();
  const product = products.find((p) => p._id === params.id);

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: 500,
    height: 400,
    [theme.breakpoints.down("sm")]: {
      width: 300,
      margin: "auto",
    },
  }));

  const Image = styled("img")(({ theme }) => ({
    height: "100%",
    width: "100%",
    objectFit: "cover",
  }));

  return (
    <Box
      sx={{
        display: { sm: "flex", xs: "column" },
        px: (theme) => theme.spacing(2),
        mt: 2,
        // justifyContent: "center",
      }}
    >
      <ImgContainer>
        <Image src={product.image} alt="" />
      </ImgContainer>
      <Box sx={{ ml: { sm: 5 } }}>
        <Typography variant="h4" color="secondary">
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ width: { sm: 300, md: 500 }, mt: 1, mb: 1 }}
          color="secondary.light"
        >
          {product.description}
        </Typography>
        <ItemRating
          ratingValue={product.rating}
          text={`${product.numReviews} reviews`}
        ></ItemRating>
        <Typography
          variant="body1"
          color="secondary"
          sx={{ fontSize: 20, mt: 2 }}
        >
          Price: ${product.price}
        </Typography>
        <Typography variant="body1" color="secondary" sx={{ mt: 1 }}>
          Status: {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
        </Typography>

        <StyledButton
          startIcon={<ShoppingCartRoundedIcon />}
          variant="contained"
          color="primary"
          size="large"
          disableElevation
          disabled={product.countInStock > 0 ? "" : "true"}
          sx={{ mt: 2, border: "2px solid gray" }}
        >
          Add To Cart
        </StyledButton>
      </Box>
    </Box>
  );
};

export default ProductScreen;
