import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)(({ theme }) => ({
  padding: 6,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  borderRadius: 2,
  width: 90,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default StyledButton;
