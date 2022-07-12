import { DeleteIcon } from "@/components/icons/DeleteIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { EyeIcon } from "@/components/icons/EyeIcon";
import { IconButton } from "@/components/icons/IconButton";
import { LockIcon } from "@/components/icons/LockIcon";
import { AiOutlineUser, AiFillMessage, AiOutlineHistory, AiTwotoneTags, AiTwotoneBell, ioIoIosMegaphone, AiOutlineCaretDown, } from "react-icons/ai";
import { IoIosMegaphone, } from "react-icons/io";
import { BsPlus } from "react-icons/bs";
import Image from 'next/image';
import Layout from "@/components/layout";
import ModelAddPartner from "@/components/partner/ModelAddPartner";
import ModelEditPartner from "@/components/partner/ModelEditPartner";
import { Col, Container, Grid, Input, Row, Spacer, Table, Tooltip } from "@nextui-org/react"; 
import Head from "next/head";
import { useState } from 'react'                               

export default function Business() {
    const [visible, setVisible] = useState(false);

    return (
        <Layout>
            
            <Head>
                <title> Business | JONGKEW</title>  
                <meta
                    name="description"
                    content="Business JONGKEW"
                />
                <link rel="icon" href="/favicon.ico" />

                
            </Head>
            <Container> 
            <div class="header">
  <h1></h1>
  <p></p>
</div>

<div class="topnav">
  <a href="#"></a>
  <a href="#"></a>
  <a href="#"></a>
</div>

<div class="row">
  <div class="column">
    <h2></h2>
    <p></p>
  </div>
  
  <div class="column">
    
    <h2>เลือกธนาคาร<AiOutlineCaretDown size={30} /> </h2>
    <h2>ชื่อบัญชี <Input  color="primary" placeholder="กรอกชื่อ"  /></h2>
    <h2>เลขที่บัญชี<Input  color="primary" placeholder="กรอกเลขที่บัญชี"  /></h2>
    <h4><BsPlus size={100}  /><input type="file" class="form-control" id="customFile" /></h4>
    เเนบรูปบัตรประชาชนเจ้าของบัญชี
    <h2><button type="button" class="btn btn-warning">ยืนยัน</button></h2>

  </div>
  
  <div class="column">
    <h2></h2>
    <p></p>
  </div>
</div>



               

            </Container>
        </Layout>
    );
}
