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

      <Button variant="secondary" className='mt-3' onClick={handleShow}>
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
                  <Form.Control type="text" placeholder="text" />
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
            <FloatingLabel controlId="floatingTextarea2" label="เพิ่มรายละเอียดร้าน">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
            <Row>
              <Col md={4}>
                <Form.Label>เลือกจำนวนที่นั่งสูงสุด</Form.Label>
                <Form.Range />
              </Col>
              <Col md={4}>
                <FloatingLabel controlId="floatingInputGrid" label="วันที่จะเข้าใช้บริการได้">
                  <Form.Control type="text" placeholder="text" />
                </FloatingLabel>
              </Col>
              <Col md={4}>
                <FloatingLabel controlId="floatingInputGrid" label="เวลาที่เข้าใช้บริการได้">
                  <Form.Control type="text" placeholder="text"/>
                </FloatingLabel>
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