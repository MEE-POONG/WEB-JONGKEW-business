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
import ModelCarouselBusiness from "../../components/business/ModelCarouselsBusinee";
import ModelCardBusinee from "../../components/business/ModelCardBusinee";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Dashboard() {
  return (
    <Container className="Business">
      <Table striped="columns">
        <thead>
          <tr>

            <th><ModelCarouselBusiness /></th>

          </tr>
        </thead>
      </Table>
      <Row xs="auto">
        <Col>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">แชท</Tooltip>}>
            <span className="d-inline-block">
              <BsFillChatDotsFill size={30}/>
            </span>
          </OverlayTrigger>
        </Col>
        <Col><OverlayTrigger overlay={<Tooltip id="tooltip-disabled">โปรโมชั่น</Tooltip>}>
          <span className="d-inline-block">
            <AiFillTags size={30}/>
          </span>
        </OverlayTrigger>
        </Col>
        <Col>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">ประวัติ</Tooltip>}>
            <span className="d-inline-block">
              <AiOutlineHistory size={30}/>
            </span>
          </OverlayTrigger>
        </Col>
        <Col >
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">แจ้งเตือน</Tooltip>}>
            <span className="d-inline-block">
              <AiOutlineBell size={30}/>
            </span>
          </OverlayTrigger>
        </Col>
      </Row>

<ModelCardBusinee/>



    </Container>
  );
}

Dashboard.layout = Business;
