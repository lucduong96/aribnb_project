import React from "react";
import Header from "../page/HomePage/Header/Header";
export default function Layout({ Component }) {
  return (
    <>
      <Header />
      <Component />
    </>
  );
}
