import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Username from "./components/Username";
import Home from "./containers/Home";
import darkTheme from "./containers/themes/dark";
import lightTheme from "./containers/themes/light";
import EstiloGlobal from "./style";

function App() {
  const [darkThemeActive, setDarkThemeActive] = useState(false);

  function changeTheme() {
    setDarkThemeActive(!darkThemeActive);
  }

  return (
    <ThemeProvider theme={darkThemeActive ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Username} />
          <Route
            path="/username/:username"
            element={<Home changeTheme={changeTheme} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
