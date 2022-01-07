import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Product from "../components/Product";
import { Box, Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import {
  getProducts,
  selectError,
  selectData,
  selectStatus,
} from "../feature/productSlice";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import AlertTitle from "@mui/material/AlertTitle";
import { HTTP_STATUS } from "../app/constants";

const HomeScreen = () => {
  const dispatch = useDispatch();

  //  get the list of products
  const products = useSelector(selectData);
  // get the status of the fetching process
  const status = useSelector(selectStatus);

  const errorMsg = useSelector(selectError);

  //  run useEffect when value of dispatch changes
  //  can also pass an empty dependency instead of dispatch, same result
  useEffect(() => {
    // dispatch function to fetch the products from api
    dispatch(getProducts())
      //  createAsyncThunk always return a resolved promise even if it is an error
      //  so unwrapResult is used to handle the error
      .then(unwrapResult)
      .then((obj) => {
        console.log(obj);
      })
      .catch((obj) => {
        console.log(obj);
      });
  }, [dispatch]);

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
        <Container sx={{ backgroundColor: "primary.main", p: 4 }}>
          <Typography variant="h4">LATEST PRODUCTS</Typography>
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
          )}
        </Container>
      )}
    </Box>
  );
};

export default HomeScreen;
