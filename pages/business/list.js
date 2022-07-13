import React from "react";
import { Container } from "react-bootstrap";
import Business from "../../layouts/Business";


export default function BusinessList() {
  return (
    <>
   <Container>
    <div className="text-center"><h1>ร้านค้าต่างๆ</h1></div>
   </Container>
    </>
  );
}

BusinessList.layout = Business;
