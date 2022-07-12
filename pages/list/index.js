import { DeleteIcon } from "@/components/icons/DeleteIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { EyeIcon } from "@/components/icons/EyeIcon";
import { IconButton } from "@/components/icons/IconButton";
import { LockIcon } from "@/components/icons/LockIcon";
import { AiOutlineUser, AiFillMessage, AiOutlineHistory, AiTwotoneTags, AiTwotoneBell } from "react-icons/ai";
import Image from 'next/image';
import Layout from "@/components/layout";
import ModelAddBusiness from "@/components/business/ModelAddBusiness";
import ModelEditPartner from "@/components/partner/ModelEditPartner";
import { Col, Container, Grid, Input, Row, Spacer, Table, Tooltip, NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import { useState } from 'react'




export default function App() {
    const [visible, setVisible] = useState(false);


    return (
        <>
            <Head>
                <title> List | JONGKEW</title>
                <meta
                    name="description"
                    content="Business JONGKEW"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                ยินดีต้อนรับ
                <h1>JONGKEW <AiOutlineUser size={50} align={"right"} /> </h1>

                <Spacer />
                <div style={{
                    textAlign: '-webkit-right'
                }}>


                </div>
                <Spacer />

                <Table
                    aria-label="Example table with static content"
                    css={{
                        height: "auto",
                        minWidth: "100%",
                       
                    }}
                >
                    <Table.Header>
                        <Table.Column></Table.Column>
                        <Table.Column></Table.Column>
                        <Table.Column></Table.Column>
                        <Table.Column></Table.Column>
                        <Table.Column><h1>ร้านค้าต่างๆ</h1></Table.Column>
                        <Table.Column></Table.Column>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row key="1">
                            <Table.Cell></Table.Cell>
                            <Table.Cell>
                                <Row justify="center" align="center">
                                    <Col css={{ d: "flex" }}>
                                        <Tooltip content="ข้อความ">
                                            <IconButton onClick={() => console.log("View user", "user.id")}>
                                                <AiFillMessage size={30} />
                                            </IconButton>
                                        </Tooltip>
                                    </Col>
                                </Row>
                            </Table.Cell>
                            <Table.Cell>
                                <Row justify="center" align="center">
                                    <Col css={{ d: "flex" }}>
                                        <Tooltip content="ประวัติ">
                                            <IconButton onClick={() => console.log("View user", "user.id")}>
                                                <AiOutlineHistory size={30} />
                                            </IconButton>
                                        </Tooltip>
                                    </Col>
                                </Row>
                            </Table.Cell>
                            <Table.Cell>
                                <Row justify="center" align="center">
                                    <Col css={{ d: "flex" }}>
                                        <Tooltip content="โปรโมชั่น">
                                            <IconButton onClick={() => console.log("View user", "user.id")}>
                                                <AiTwotoneTags size={30} />
                                            </IconButton>
                                        </Tooltip>
                                    </Col>
                                </Row>
                            </Table.Cell>
                            <Table.Cell>
                                <Row justify="center" align="center">
                                    <Col css={{ d: "flex" }}>
                                        <Tooltip content="แจ้งเตือน">
                                            <IconButton onClick={() => console.log("View user", "user.id")}>
                                                <AiTwotoneBell size={30} />
                                            </IconButton>
                                        </Tooltip>
                                    </Col>
                                </Row>
                            </Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                <Spacer />
                <Grid>
                    <Row style={{ alignItems: 'left' }}>
                        <Input
                            labelLeft="ค้นหา"
                            placeholder="พิมพ์คำค้นหา"
                            fullWidth
                        />

                        <svg style={{ cursor: 'pointer', width: '24px', marginLeft: '10px' }} onClick={() => console.log("KKK")} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </Row>
                </Grid>


                <Spacer />
                <Table
                    aria-label="Example table with static content"
                    css={{
                        height: "20%",
                        minWidth: "100%",
                        backgroundColor: "gray",
                    }}
                >

                    <Table.Header>
                        <Table.Column></Table.Column>
                        <Table.Column>รูปร้าน</Table.Column>
                        <Table.Column>ชื่อร้าน</Table.Column>
                        <Table.Column>เวลาที่เข้าใช้บริการได้</Table.Column>
                        <Table.Column></Table.Column>
                        <Table.Column></Table.Column>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row key="1">
                            <Table.Cell></Table.Cell>
                            <Table.Cell>
                                <Image src="/img/jq.png" alt="Vercel Logo" width={250} height={250} css={{ objectFill: "none" }} />
                            </Table.Cell>
                            <Table.Cell>
                                {/* <Image src="/img/jq.png" alt="Vercel Logo" width={250} height={250} css={{ objectFill: "none" }} /> */}
                            </Table.Cell>
                            <Table.Cell>
                                {/* <Image src="/img/jq.png" alt="Vercel Logo" width={250} height={250} css={{ objectFill: "none" }} /> */}
                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

            </Container>

        </>
    );
}