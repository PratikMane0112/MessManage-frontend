import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
   <>
      <Navbar />
      <Outlet className="mt-32"> </Outlet>
      <Footer />
      </>
  );
};

export default Main;
