import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default-theme";
import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}
