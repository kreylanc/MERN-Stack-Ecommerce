import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { useParams } from "react-router-dom";
import ItemRating from "../components/ItemRating";
import StyledButton from "../components/StyledButton";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleProduct,
  selectError,
  selectData,
  selectStatus,
} from "../feature/singleProductSlice";
import { Alert, Stack, AlertTitle } from "@mui/material";
import { HTTP_STATUS } from "../app/constants";

const ProductScreen = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const product = useSelector(selectData);
  const status = useSelector(selectStatus);
  const errorMsg = useSelector(selectError);
  // Rating MUI component changes to uncontrolled when passed undefined
  // predefining rating value as numeber to fix the error
  // const [product, setProduct] = useState({
  //   rating: 0,
  // });

  useEffect(() => {
    dispatch(getSingleProduct(params.id));
  }, []);

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
    <Box>
      {errorMsg ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {errorMsg}
          </Alert>
        </Stack>
      ) : (
        <Box>
          {status === HTTP_STATUS.PENDING ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "100%",
                alignItems: "center",
              }}
            >
              <CircularProgress color="secondary" />
            </Box>
          ) : (
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
                  Status:{" "}
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </Typography>

                <StyledButton
                  startIcon={<ShoppingCartRoundedIcon />}
                  variant="contained"
                  color="primary"
                  size="large"
                  disableElevation
                  disabled={product.countInStock > 0 ? false : true}
                  sx={{ mt: 2, border: "2px solid gray" }}
                >
                  Add To Cart
                </StyledButton>
              </Box>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ProductScreen;
