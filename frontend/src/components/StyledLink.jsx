import { styled } from "@mui/system";
import Link from "@mui/material/Link";

const StyledLink = styled(Link)(({ theme }) => ({
  padding: 4,
  color: theme.palette.secondary.main,
  display: "flex",
  justifyContent: "center",
  opacity: 0.8,
  cursor: "pointer",
  fontWeight: "bold",
  marginRight: 8,
  textDecoration: "none",

  "&:hover": {
    color: theme.palette.secondary.dark,
    opacity: 1,
  },
}));

export default StyledLink;
