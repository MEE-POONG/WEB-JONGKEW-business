import React from "react";
import { AiOutlinePlus, AiFillTags, AiOutlineHistory, AiOutlineBell, } from "react-icons/ai";
import { BsFillMegaphoneFill, BsFillChatDotsFill, } from "react-icons/Bs";
import Business from "../../layouts/Business";
import { Button, Container, Row, Col, } from "react-bootstrap";



export default function Dashboard() {
  return (
    <>
      <h2>เพิ่มโปรโมชั่นร้าน<AiOutlinePlus /></h2>


      <Container className="promotion">
        <Row>
          <Col></Col>
          <Col><h1><BsFillMegaphoneFill size={50} />&nbsp;&nbsp;&nbsp;โปรโมชั่น</h1></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <div>
          <Button variant="white"><BsFillChatDotsFill size={30} /></Button>{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="white"><AiFillTags size={30} /></Button>{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="white"><AiOutlineHistory size={30} /></Button>{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="white"><AiOutlineBell size={30} /></Button>{' '}
          <Row>
            
        <Col>1 of 1</Col>
      </Row>

        </div>



      </Container>
    </>
  );
}

Dashboard.layout = Business;
