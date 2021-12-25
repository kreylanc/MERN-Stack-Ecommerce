import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)(({ theme }) => ({
  // backgroundColor: theme.palette.secondary.main,
  borderRadius: 2,
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default StyledButton;
