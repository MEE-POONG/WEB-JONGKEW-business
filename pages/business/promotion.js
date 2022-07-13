import React from "react";
import { AiOutlinePlus, AiFillTags, AiOutlineHistory, AiOutlineBell, } from "react-icons/ai";
import { BsFillMegaphoneFill, BsFillChatDotsFill, } from "react-icons/Bs";
import Business from "../../layouts/Business";
import { Button, Container, Row, Col, } from "react-bootstrap";



export default function Dashboard() {
  return (
    <>


      <Container className="promotion">
        <Row>
          <Col></Col>
          <Col></Col>
          <Col><h1><BsFillMegaphoneFill size={50} />&nbsp;&nbsp;&nbsp;โปรโมชั่น</h1></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col><h2><button type="button" class="btn btn-light" data-toggle="modal" data-target="#exampleModalCenter">
          เพิ่มโปรโมชั่นร้าน<AiOutlinePlus /> 
          </button></h2> </Col>            
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
            <Col>&nbsp;&nbsp;</Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row>

            <Col><img
              className="d-block w-100"
              src="https://i.imgur.com/Jk493Rs.png"
              alt="Second slide"
            /></Col>
          </Row>
          <Row>
            <Col>&nbsp;&nbsp;</Col>
          </Row>
          <Row>
            <Col><img
              className="d-block w-100"
              src="https://i.imgur.com/Jk493Rs.png"
              alt="Second slide"
            /></Col>
          </Row>
          <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

        </div>



      </Container>
    </>
  );
}

Dashboard.layout = Business;
