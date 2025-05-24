import React from "react";
import HeaderTopComponent from "./header-top";
import NavbarComponent from "./navbar";

export default function HeaderComponent() {
  return (
    <>
      <header>
        <HeaderTopComponent />
        <NavbarComponent />
      </header>
    </>
  );
}
