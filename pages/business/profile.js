import { DeleteIcon } from "@/components/icons/DeleteIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { EyeIcon } from "@/components/icons/EyeIcon";
import { IconButton } from "@/components/icons/IconButton";
import { LockIcon } from "@/components/icons/LockIcon";
import { AiOutlineUser, AiFillMessage, AiOutlineHistory, AiTwotoneTags, AiTwotoneBell,AiOutlineWarning, } from "react-icons/ai";
import { IoIosExit, } from "react-icons/Io";
import { MdEmail, } from "react-icons/Md";
import { BiUser, } from "react-icons/Bi";
import { RiFilePaper2Line, } from "react-icons/Ri";
import { BsPlus,BsTelephoneFill, } from "react-icons/bs";
import Image from 'next/image';
import Layoutprofile from "@/components/layoutprofile";
import ModelAddPartner from "@/components/partner/ModelAddPartner";
import ModelEditPartner from "@/components/partner/ModelEditPartner";
import { Col, Container, Grid, Input, Row, Spacer, Table, Tooltip, User } from "@nextui-org/react";
import Head from "next/head";
import { useState } from 'react'


export default function Business() {
    const [visible, setVisible] = useState(false);

    return (
        <Layoutprofile>

                        <Spacer />

                        <Head>

                            <title> Business | JONGKEW</title>
                            <meta
                                name="description"
                                content="Business JONGKEW"
                            />
                            <link rel="icon" href="/favicon.ico" />

                        </Head>
                        
                       
                        <Container className="profile">
                            




                            <div class="filter">

                            </div>


                            <table >



                                <tr>

                                    <th></th>

                                    <th>Nom</th>

                                    <th>Prenom</th>

                                    <th>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                                        
                                         <User
                                        bordered
                                        name="Ariana Wattson"
                                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                        color="warning"
                                        size="xl"
                                    /></th>

                                    <th>date de naissance </th>

                                    <th>salaire</th>

                                </tr>


                                <tr>

                                    <td></td>

                                    <td></td>

                                    <td><MdEmail size={20} />อีเมล</td>

                                    <td></td>

                                    <td></td>

                                    <td></td>

                                </tr>

                                <tr>

                                    <td></td>

                                    <td></td>

                                    <td><BiUser size={20} />ชื่อ-นามสกุล</td>

                                    <td></td>

                                    <td></td>

                                    <td></td>

                                </tr>

                                <tr>

                                    <td></td>

                                    <td></td>

                                    <td><BsTelephoneFill size={20} />เบอร์โทรศัพท์</td>

                                    <td></td>

                                    <td></td>

                                    <td></td>

                                </tr>

                                <tr>

                                    <td></td>

                                    <td></td>

                                    <td><AiOutlineWarning size={20} />ศูนย์ช่วยเหลือ</td>

                                    <td></td>

                                    <td></td>

                                    <td></td>

                                </tr>

                                <tr>

                                    <td></td>

                                    <td></td>

                                    <td><RiFilePaper2Line size={20} />สลิปของฉัน</td>

                                    <td></td>

                                    <td></td>

                                    <td></td>

                                </tr>
                                <tr>

                                    <td></td>

                                    <td></td>

                                    <td></td>

                                    <td><button type="button" class="btn btn-warning"><IoIosExit size={22} />ออกจากระบบ</button></td>

                                    <td></td>

                                    <td></td>

                                </tr>





                            </table>


                            <Spacer />
                        </Container>
            

        </Layoutprofile>
    );
}
