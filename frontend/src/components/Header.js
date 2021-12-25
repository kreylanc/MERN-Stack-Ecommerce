import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import StyledLink from "./StyledLink";
import { styled } from "@mui/system";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import StyledButton from "./StyledButton";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { Container } from "@mui/material";

const StyledDiv = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

function Header() {
  return (
    <AppBar
      position="relative"
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <StyledLink
          component={RouterLink}
          to="/"
          sx={{ opacity: 1, textAlign: "center" }}
        >
          <Typography
            variant="h6"
            color="secondary"
            // sx={{ textAlign: "center" }}
          >
            E-shop
          </Typography>
        </StyledLink>

        <StyledDiv>
          <StyledLink component={RouterLink} to="/cart">
            <ShoppingCartRoundedIcon />
            Cart
          </StyledLink>
          <Link component={RouterLink} to="/signin">
            <StyledButton disableElevation variant="outlined" color="secondary">
              Sign In
            </StyledButton>
          </Link>
        </StyledDiv>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
