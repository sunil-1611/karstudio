import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box className="wrapper" sx={{
        "@media(max-Width: 676px)": {
        marginTop: "5rem",
      },
      }}>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
