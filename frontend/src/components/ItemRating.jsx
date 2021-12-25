import Rating from "@mui/material/Rating";
import { Box, Typography } from "@mui/material";

const ItemRating = ({ ratingValue, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="half-rating-read"
        precision={0.5}
        value={ratingValue}
        readOnly
      />
      <Typography variant="body1">{text && text}</Typography>
    </Box>
  );
};

export default ItemRating;
