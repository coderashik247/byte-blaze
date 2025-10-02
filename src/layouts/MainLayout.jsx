import React from "react";
import Container from "../components/Container/Container";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <div className="bg-base-100 shadow-sm">
        <Container>
          <Navbar></Navbar>
        </Container>
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
      <div className="bg-base-200 text-base-content">
        <Container>
          <Footer></Footer>
        </Container>
      </div>
    </>
  );
};

export default MainLayout;
