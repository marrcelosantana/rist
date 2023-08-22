import { ThemeProvider } from "styled-components";

import { defaultTheme } from "@/themes/default-theme";
import { GlobalStyle } from "@/styles/global";

import { Header } from "@/components/Header";

import { SignIn } from "@/pages/SignIn";
import { Home } from "@/pages/Home";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Home />
    </ThemeProvider>
  );
}
