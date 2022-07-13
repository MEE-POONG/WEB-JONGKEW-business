import React from "react";

// components

// import CardLineChart from "components/Cards/CardLineChart.js";
// import CardBarChart from "components/Cards/CardBarChart.js";
// import CardPageVisits from "components/Cards/CardPageVisits.js";
// import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page
import Table from 'react-bootstrap/Table';
import Business from "../../layouts/Business";
import ModelCarouselBusiness from "../../components/business/ModelCarouselsBusinee";
import { Container } from "react-bootstrap";

export default function Dashboard() {
  return (
    <Container className="Business">
    <Table striped="columns">
      <thead>
        <tr>
          
          <th><ModelCarouselBusiness/></th>
          
        </tr>
      </thead>
      </Table>
    
      
    </Container>
  );
}

Dashboard.layout = Business;
