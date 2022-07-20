import React from "react";

// components

// import CardLineChart from "components/Cards/CardLineChart.js";
// import CardBarChart from "components/Cards/CardBarChart.js";
// import CardPageVisits from "components/Cards/CardPageVisits.js";
// import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page
import { AiOutlinePlus, AiFillTags, AiOutlineHistory, AiOutlineBell, } from "react-icons/ai";
import { BsFillMegaphoneFill, BsFillChatDotsFill, } from "react-icons/Bs";
import Table from 'react-bootstrap/Table';
import Business from "../../layouts/Business";
import SlideCarouselsBusinee from "../../components/business/SlideCarouselsBusinee";
import IndexCardBusinee from "../../components/business/IndexCardBusinee";
import ModelButtonBusinee from "../../components/business/ModelButtonBusinee";
import { Container  } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Stack from 'react-bootstrap/Stack';

export default function BusinessIndex() {
  return (
    <Container className="business-index" >
      <Table striped="columns ">
        <thead>
          <tr>

            <th><SlideCarouselsBusinee /></th>

          </tr>
        </thead>
      </Table>
      
      <Row className="text-center mt-3">
        <Col xs="3">
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">แชท</Tooltip>}>
            <span className="d-inline-block">
              <BsFillChatDotsFill size={30}/>
            </span>
          </OverlayTrigger>
        </Col>
        <Col xs="3"><OverlayTrigger overlay={<Tooltip id="tooltip-disabled">โปรโมชั่น</Tooltip>}>
          <span className="d-inline-block">
            <AiFillTags size={30}/>
          </span>
        </OverlayTrigger>
        </Col>
        <Col xs="3">
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">ประวัติ</Tooltip>}>
            <span className="d-inline-block">
              <AiOutlineHistory size={30}/>
            </span>
          </OverlayTrigger>
        </Col>
        <Col xs="3" >
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">แจ้งเตือน</Tooltip>}>
            <span className="d-inline-block">
              <AiOutlineBell size={30}/>
            </span>
          </OverlayTrigger>
        </Col>
      </Row>
      <ModelButtonBusinee/>
      <Row className="mt-3">
    

        <Col className="column" xs={4}><IndexCardBusinee/></Col>
        <Col className="column" xs={4}><IndexCardBusinee/></Col>
        <Col className="column" xs={4}><IndexCardBusinee/></Col>

        <Col className="column" xs={4}><IndexCardBusinee/></Col>
        <Col className="column" xs={4}><IndexCardBusinee/></Col>
        <Col className="column" xs={4}><IndexCardBusinee/></Col>
      </Row>


      
    </Container>
  );
}

BusinessIndex.layout = Business;
