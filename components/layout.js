import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer mt= {[5,10,15]} />
    </>
  );
};

export default Layout;
