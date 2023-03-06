import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./theme/theme";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import { UiProvider } from "./uiContext/uiContext";
function App() {
  return (
    <UiProvider>
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </UiProvider>
  );
}

export default App;
