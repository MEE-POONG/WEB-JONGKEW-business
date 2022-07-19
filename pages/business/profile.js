import React from "react";
import { AiOutlinePlus, AiFillTags, AiOutlineHistory, AiOutlineBell, } from "react-icons/ai";
import { BsFillMegaphoneFill, BsFillChatDotsFill, } from "react-icons/Bs";
import Business from "../../layouts/Business";
import { Button, Container, Row, Col, Card,Form, DropdownButton,Table, } from "react-bootstrap";
import ModaladdPromotion from "../../components/business/ModaladdPromotion";
import Dropdown from 'react-bootstrap/Dropdown';

<link href="https://cdn.jsdelivr.net/npm/bootstrap-avatar@latest/dist/avatar.min.css" rel="stylesheet"></link>



export default function BusinessProfile() {
  return (
    <>







<img src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png" alt="Avatar" class="avatar"/>
      <Container className="profile">
        <Table striped>
                             
      <tbody>
      <tr>
          <td></td>
          <td></td>
          <td></td>   
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>อีเมล</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>ชื่อ-นามสกุล</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>เบอร์โทร</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>ศูนย์ช่วยเหลือ</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>สลิปของฉัน</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>




      </Container>
    </>
  );
}

BusinessProfile.layout = Business;
