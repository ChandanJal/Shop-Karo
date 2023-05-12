import React from "react";

import Header from "./Header";
import Logo from "./Header/Logo";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      {/* <div className="footer bg-light mt-5 pt-4 pb-4 h-100">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <Logo />
            <p className="m-0">This is just a demo made in &#169;Viitor Cloud</p>
          </div>
        </div>
      </div> */}
    </>
  );
}
