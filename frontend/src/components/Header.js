import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import StyledLink from "./StyledLink";
import { styled } from "@mui/system";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import StyledButton from "./StyledButton";

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
        backgroundColor: "secondary.main",
        width: "100%",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" color="primary">
          E-shop
        </Typography>

        <StyledDiv>
          <StyledLink>
            <ShoppingCartRoundedIcon />
            Cart
          </StyledLink>
          <StyledButton disableElevation variant="contained">
            Sign In
          </StyledButton>
        </StyledDiv>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
