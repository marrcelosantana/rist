import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default-theme";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div>
        <h1>Hello World</h1>
      </div>
    </ThemeProvider>
  );
}
