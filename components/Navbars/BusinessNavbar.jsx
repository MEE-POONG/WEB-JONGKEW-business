import React from "react";
import Link from "next/link";
import AboutBusinee from "../../components/business/AboutBusinee";

import { AiFillMail } from "react-icons/ai";

// components
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Badge } from 'react-bootstrap';


export default function BusinessNavbar() {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <Navbar bg="secondary" variant="light" expand={false}>
        <Container  >

          <Navbar.Brand href="#">
            <Image src="https://i.imgur.com/FPczyH9.png" width={200} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" className="p-1 rounded-circle" >
          <Image src="https://i.imgur.com/paRMBLb.jpeg" width={50} height={50} className="object-cover rounded-circle"/>
          
              </Navbar.Toggle>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">ข้อมูลส่วนตัว</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <AboutBusinee/>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
