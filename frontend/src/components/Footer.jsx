import { Container } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Copyright &copy; Eshop
      </Container>
    </footer>
  );
};

export default Footer;
