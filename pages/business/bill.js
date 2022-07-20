import React from "react";
import { AiOutlinePlus, AiFillTags, AiOutlineHistory, AiOutlineBell, } from "react-icons/ai";
import { BsFillMegaphoneFill, BsFillChatDotsFill, } from "react-icons/Bs";
import Business from "../../layouts/Business";
import { Button, Container, Row, Col, Card,Form, DropdownButton } from "react-bootstrap";
import ModaladdPromotion from "../../components/business/ModaladdPromotion";
import Dropdown from 'react-bootstrap/Dropdown';





export default function BusinessBill() {
  return (
    <>


      <Container className="bill">
        <Card className="kard">
          <Card.Body>
            <div>
            <Form.Select aria-label="Default select example">
      <option>เลือกธนาคาร</option>
      <option value="1">ออมสิน</option>
      <option value="2">ไทยพาณิชย์</option>
      <option value="3">กรุงไทย</option>
    </Form.Select>
            </div>
            <div><h4>ชื่อบัญชี:<Form.Control type="text" placeholder="กรอกชื่อบัญชี" /></h4></div>
            <div><h4>เลขที่บัญชี<Form.Control type="number" placeholder="กรอกเลขที่บัญชี" /></h4></div>
            <div><h4>เเนบรูปบัตรประชาชนเจ้าของบัญชี</h4></div>
            <div><Form.Control type="file" size="sm" /></div><br></br>
            <div><button>ยืนยัน</button></div>
          </Card.Body>
        </Card>




      </Container>
    </>
  );
}

BusinessBill.layout = Business;
