import React from "react";
import Footer from "../page/HomePage/Footer/Footer";
import Header from "../page/HomePage/Header/Header";

export default function Layout({ Component }) {
  return (
    <>
      <Header />
      <Component />
      <Footer />
    </>
  );
}
