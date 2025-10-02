import React from "react";
import Container from "../components/Container/Container";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Container> 
        <Navbar></Navbar> 
      </Container>
        <div className="min-h-[calc(100vh - 116px)]">
            <Outlet></Outlet>
        </div>
      <Container>
        <Footer></Footer>
      </Container>
    </>
  );
};

export default MainLayout;
