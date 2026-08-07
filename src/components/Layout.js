import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../foundation/globalStyles";
import theme from "../theme";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <>
          {children}
        </>
      </ThemeProvider>
    </>
  );
};

export default Layout;
