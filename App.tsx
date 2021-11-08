import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Navigation from "./screens";
//ideally should be another navigator, not just a screen
import ErrorScreen from "./screens/ErrorScreen";

import useFonts from "./hooks/useFonts";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  const fontsLoaded = useFonts();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {fontsLoaded ? <Navigation /> : <ErrorScreen />}
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
