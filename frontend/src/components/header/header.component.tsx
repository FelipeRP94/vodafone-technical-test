import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../../assets/img/vodafone-logo.png";
import { HeaderContainer, Logo } from "./header.styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Toolbar>
        <Logo src={logo} alt="Vodafone logo" />
        <Box>
          <Button>Home</Button>
          <Button>Devices</Button>
        </Box>
      </Toolbar>
    </HeaderContainer>
  );
};
