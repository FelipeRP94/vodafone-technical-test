import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../../assets/img/vodafone-logo.png";
import { HeaderContainer, Logo } from "./header.styles";
import { useNavigate } from "react-router-dom";
import { routes } from "../../lib/react-router/constants";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Toolbar>
        <Logo src={logo} alt="Vodafone logo" />
        <Box>
          <Button onClick={() => navigate(routes.HOME)}>Home</Button>
          <Button onClick={() => navigate(routes.DEVICES)}>Devices</Button>
        </Box>
      </Toolbar>
    </HeaderContainer>
  );
};
