import { Header } from "common/components/Header.component";
import { Box } from "@chakra-ui/react";
import { DeviceLandingPage } from "modules/deviceInventory/page/LandingPage";
import AppLogo from "assets/images/socket-logo-transparent.png";
import "./App.css";

function App() {
  return (
    <>
      <Header>
        <Box width="100px">
          <img src={AppLogo} height="100%" width="100%" />
        </Box>
      </Header>
      <DeviceLandingPage />
    </>
  );
}

export default App;
