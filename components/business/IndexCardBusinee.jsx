import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container  } from "react-bootstrap";


function IndexCardBusinee() {
  return (
    <Container className="IndexCardBusinee" >
   
      <Card>
        <Card.Img variant="top" src="https://i.imgur.com/paRMBLb.jpeg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
</Container>
  );
}

export default IndexCardBusinee;