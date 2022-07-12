import { DeleteIcon } from "@/components/icons/DeleteIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { EyeIcon } from "@/components/icons/EyeIcon";
import { IconButton } from "@/components/icons/IconButton";
import { LockIcon } from "@/components/icons/LockIcon";
import { AiOutlineUser, AiFillMessage, AiOutlineHistory, AiTwotoneTags, AiTwotoneBell, ioIoIosMegaphone, AiOutlineCaretDown, } from "react-icons/ai";
import { IoIosMegaphone, } from "react-icons/io";
import { MdEmail, } from "react-icons/Md";
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
            <Container className="profile">
                <div class="filter">

                </div>

                <table >



                    <tr>

                        <th>#</th>

                        <th>Nom</th>

                        <th>Prenom</th>

                        <th>identifiant </th>

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

                        <td>ชื่อ-นามสกุล</td>

                        <td></td>

                        <td></td>

                        <td></td>

                    </tr>

                    <tr>

                        <td></td>

                        <td></td>

                        <td>เบอร์โทรศัพท์</td>

                        <td></td>

                        <td></td>

                        <td></td>

                    </tr>

                    <tr>

                        <td></td>

                        <td></td>

                        <td>ศูนย์ช่วยเหลือ</td>

                        <td></td>

                        <td></td>

                        <td></td>

                    </tr>

                    <tr>

                        <td></td>

                        <td></td>

                        <td></td>

                        <td></td>

                        <td></td>

                        <td></td>

                    </tr>





                </table>

            </Container>
        </Layout>
    );
}
