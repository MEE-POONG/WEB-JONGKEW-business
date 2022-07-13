import React from "react";
import { AiOutlinePlus, AiFillTags, AiOutlineHistory, AiOutlineBell, } from "react-icons/ai";
import { BsFillMegaphoneFill } from "react-icons/Bs";
import Business from "../../layouts/Business";
import { Button, Container, Row, Col, } from "react-bootstrap";



export default function Dashboard() {
  return (
    <>
      <h2>เพิ่มโปรโมชั่นร้าน<AiOutlinePlus /></h2>

    <Container>
      <Row>
        <Col></Col>
        <Col><BsFillMegaphoneFill size={30} /><h1>โปรโมชั่น</h1></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  



      <Container className="promotion">
        <div>
          <Button variant="white"><AiOutlineHistory size={30} /></Button>{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="white"><AiFillTags size={30} /></Button>{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="white"><AiOutlineHistory size={30} /></Button>{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="white"><AiOutlineBell size={30} /></Button>{' '}

        </div>



      </Container>
    </>
  );
}

Dashboard.layout = Business;
