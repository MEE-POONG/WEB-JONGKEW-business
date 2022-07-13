import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Image } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { AiFillMail, AiFillContacts, AiOutlinePhone, AiTwotoneWarning, AiFillCopy, AiOutlineExport   } from "react-icons/ai";

function AboutBusinee() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
         
        </Col>
        <Col md="auto"><Image src="https://i.imgur.com/paRMBLb.jpeg" width={100} height={100} className="object-cover"/></Col>
        <Col xs lg="2"></Col>
      </Row>
      <Row>
        <Col xs={4}></Col>
        <Col xs={4}> Worapon</Col>
        <Col xs={4}></Col>
      </Row>

      <Table striped>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> <AiFillMail size={30}/> </td>
          <td> อีเมล </td>
          <td></td>
          <td> jongkew@gmail.com </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><AiFillContacts size={30}/> </td>
          <td colSpan={2}>ชื่อ-นามสกุล</td>
          <td>นู๋พล</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td> <AiOutlinePhone size={30}/></td>
          <td> เบอร์โทรศัทพ์</td>
          <td></td>
          <td> 0123 654 1110</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><AiTwotoneWarning size={30}/></td> 
          <td>ศูนย์ช่วยเหลือ</td>
          <td></td>
          <td>Tell-1113</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td> <AiFillCopy size={30}/> </td>
          <td> สลิปของฉัน </td>
          <td> </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td><AiOutlineExport size={30}/></td>
          <td>ออกจากระบบ</td>
          
        </tr>
      </tbody>
  
    </Table>

    </Container>
  );
}

export default AboutBusinee;