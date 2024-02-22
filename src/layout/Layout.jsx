import React from "react";
// import HeroSection from "../components/home/HeroSection";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <header className="mb-4">
        <Navbar />
      </header>
      <Outlet />
      <footer className="mt-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
