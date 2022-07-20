import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { AiOutlinePlus, AiFillTags, AiOutlineHistory, AiOutlineBell, } from "react-icons/ai";

function ModaladdPromotion() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <>
      
      <Button variant="white" className= "bt"   onClick={handleShow}>
        เพิ่มโปรโมชั่นร้าน<AiOutlinePlus className="pl" size={25} />
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>อัปโหลดโปรโมชั่นร้าน&nbsp;(1237*254)</Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{minHeight:"500px"}}><input type="file" id="myfile" name="myfile"/></Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleClose}>
            บันทึก
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModaladdPromotion;