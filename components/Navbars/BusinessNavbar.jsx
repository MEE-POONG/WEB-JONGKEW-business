import React from "react";
import Link from "next/link";
import { User } from '@nextui-org/react';
import { AiFillMail } from "react-icons/ai";

// components
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image } from 'react-bootstrap';


export default function BusinessNavbar() {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <Navbar bg="light" variant="light" expand={false}>
        <Container  >

          <Navbar.Brand href="#">
            <Image src="https://i.imgur.com/FPczyH9.png" width={200} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" >
          <User
                src="https://i.pravatar.cc/150?u=a092581d4ef9026700d"
                name="Kristen Copper"
                size="lg"
              />
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
            <User
                src="https://i.pravatar.cc/150?u=a092581d4ef9026700d"
                name="Kristen Copper"
                size="lg"
              />

              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                {/* <AiFillMail>AiFillMail> */}
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Link href={"/"}> home </Link>
    </>
  );
}
