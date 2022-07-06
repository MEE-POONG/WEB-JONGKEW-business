import { DeleteIcon } from "@/components/icons/DeleteIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { EyeIcon } from "@/components/icons/EyeIcon";
import { IconButton } from "@/components/icons/IconButton";
import { LockIcon } from "@/components/icons/LockIcon";
import { AiOutlineUser, AiFillMessage, AiOutlineHistory, AiTwotoneTags, AiTwotoneBell } from "react-icons/ai";
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
                ยินดีต้อนรับ
                <h1>JONGKEW <AiOutlineUser size={50} fill="#979797" /> </h1>

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
                        <Table.Column><h1>ป้ายโปรโมท</h1></Table.Column>
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

                <ModelAddPartner />

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
                        <Table.Column>
                            <Image src="/img/jq.png" alt="Vercel Logo" width={250} height={250} css={{ objectFill: "none" }} />
                        </Table.Column>
                        <Table.Column>
                            <Image src="/img/jq.png" alt="Vercel Logo" width={250} height={250} css={{ objectFill: "none" }} />
                        </Table.Column>
                        <Table.Column>
                            <Image src="/img/jq.png" alt="Vercel Logo" width={250} height={250} css={{ objectFill: "none" }} />
                        </Table.Column>
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
                                <Image src="/img/jq.png" alt="Vercel Logo" width={250} height={250} css={{ objectFill: "none" }} />
                            </Table.Cell>
                            <Table.Cell>
                                <Image src="/img/jq.png" alt="Vercel Logo" width={250} height={250} css={{ objectFill: "none" }} />
                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

            </Container>
        </Layout>
    );
}