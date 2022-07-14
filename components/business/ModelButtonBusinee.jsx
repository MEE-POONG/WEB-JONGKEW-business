import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';




function ModelButtonBusinee() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Button variant="secondary" onClick={handleShow}>
        เพิ่มร้าน
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header>
        </Modal.Header>

        <Modal.Body>
          <Stack gap={4}>
            <Row >
              <Col md={4}></Col>
              <Col md={4}>
                <FloatingLabel controlId="floatingInputGrid" label="ชื่อร้าน">
                  <Form.Control type="text" />
                </FloatingLabel>
              </Col>
              <Col md={4}></Col>
            </Row>

            <Row >
              <Col md={4}>
                <Form.Label>เพิ่มรูปภาพ4</Form.Label>
                <Form.Control type="file" />
              </Col>
              <Col md={4}>
                <Form.Label>เพิ่มรูปภาพ3</Form.Label>
                <Form.Control type="file" />
              </Col>
              <Col md={4}>
                <Form.Label>เพิ่มรูปภาพ2</Form.Label>
                <Form.Control type="file" />
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Label>Range</Form.Label>
                <Form.Range />
              </Col>
            </Row>

          </Stack>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            เพิ่ม
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default ModelButtonBusinee;