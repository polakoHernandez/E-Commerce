import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import Add from "./components/Add";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar></Navbar>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar
            mode={() => setMode(mode == "dark" ? "light" : "dark")}
          ></SideBar>
          <Feed></Feed>
          <RightBar></RightBar>
        </Stack>
        <Add></Add>
      </Box>
    </ThemeProvider>
  );
}

export default App;
