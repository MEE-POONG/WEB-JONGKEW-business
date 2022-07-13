import React from "react";

// components

import Navbar from "../components/Navbars/BusinessNavbar";
// import FooterSmall from "components/Footers/FooterSmall.js";

export default function Business({ children }) {
  return (
    <>
      <Navbar transparent />
      <main>
        
          {children}
          {/* <FooterSmall absolute /> */}
     
      </main>
    </>
  );
}
