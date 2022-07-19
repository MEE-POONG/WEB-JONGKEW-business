import React from "react";
import { Container } from "react-bootstrap";
import Business from "../../layouts/Business";
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'
import { AiOutlinePlus, AiFillTags, AiOutlineHistory, AiOutlineBell, AiFillMail } from "react-icons/ai";
import { BsFillMegaphoneFill,BsFillChatDotsFill } from "react-icons/Bs";
import { GiMagnifyingGlass } from "react-icons/gi";
import { Button, Row, Col } from "react-bootstrap";
import { Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Badge } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';



export default function BusinessList() {
    return (
        <>
            <div
                className="text-center"><h1>ร้านค้าต่างๆ</h1>
            </div>

            <Container className="business-list">
                <Stack gap={3}>
                    <Row xs="auto">
                        <Col><Button variant="white">< BsFillChatDotsFill size={30} /></Button>{' '}</Col>
                        <Col><Button variant="white"><AiFillTags size={30} /></Button>{' '}</Col>
                        <Col><Button variant="white"><AiOutlineHistory size={30} /></Button>{' '}</Col>
                        <Col><Button variant="white"><AiOutlineBell size={30} /></Button>{' '}</Col>
                    </Row>
                    <Form className="d-flex"><GiMagnifyingGlass size={20}/>ค้นหา
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-5"
                            aria-label="Search"
                        />
                        {/* <AiFillMail /> */}
                    </Form>
                    <div className="center">
                        <Table striped bordered hover className="text-center">
                            <thead>
                                <tr>
                                    <th>รูปร้าน</th>
                                    <th>ชื่อร้าน</th>
                                    <th>เวลาเปิดทำการ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Image src="https://i.imgur.com/qzRcDgc.jpeg" width="300" height="200" /></td>
                                    <td>กาก</td>
                                    <td>00.00-00.00</td>
                                </tr>
                                <tr>
                                    <td><Image src="https://i.imgur.com/qzRcDgc.jpeg" width="300" height="200" /></td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                </tr>
                                <tr>
                                    <td><Image src="https://i.imgur.com/qzRcDgc.jpeg" width="300" height="200" /></td>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <td><Image src="https://i.imgur.com/qzRcDgc.jpeg" width="300" height="200" /></td>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <td><Image src="https://i.imgur.com/qzRcDgc.jpeg" width="300" height="200" /></td>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <td><Image src="https://i.imgur.com/qzRcDgc.jpeg" width="300" height="200" /></td>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <td><Image src="https://i.imgur.com/qzRcDgc.jpeg" width="300" height="200" /></td>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <td><Image src="https://i.imgur.com/qzRcDgc.jpeg" width="300" height="200" /></td>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <td><Image src="https://i.imgur.com/qzRcDgc.jpeg" width="300" height="200" /></td>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Stack>
            </Container>


        </>
    );
}

BusinessList.layout = Business;
