import React from "react";
import { AiOutlinePlus, AiFillTags, AiOutlineHistory, AiOutlineBell, } from "react-icons/ai";
import { BsFillMegaphoneFill, BsFillChatDotsFill, } from "react-icons/Bs";
import Business from "../../layouts/Business";
import { Button, Container, Row, Col, } from "react-bootstrap";
import ModaladdPromotion from "../../components/business/ModaladdPromotion";



export default function Dashboard() {
  return (
    <>


      <Container className="promotion">
      <div className="text-center mt-3">
<h1><BsFillMegaphoneFill size={50} />&nbsp;&nbsp;&nbsp;โปรโมชั่น</h1>
</div>
      
        <Row>
          <Col>
          <ModaladdPromotion/>
          </Col>            
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
  
</div>

        </div>



      </Container>
    </>
  );
}

Dashboard.layout = Business;
