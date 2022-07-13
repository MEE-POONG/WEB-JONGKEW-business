import { DeleteIcon } from "@/components/icons/DeleteIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { EyeIcon } from "@/components/icons/EyeIcon";
import { IconButton } from "@/components/icons/IconButton";
import { LockIcon } from "@/components/icons/LockIcon";
import { AiOutlineUser, AiFillMessage, AiOutlineHistory, AiTwotoneTags, AiTwotoneBell } from "react-icons/ai";
// import Image from 'next/image';
import Layout from "@/components/layout";
import ModelAddBusiness from "@/components/business/ModelAddBusiness";
import ModelEditPartner from "@/components/partner/ModelEditPartner";
import { Col, Container, Grid, Input, Row, Spacer, Table, Tooltip, Image, Card, Text } from "@nextui-org/react";
import Head from "next/head";
import { useState } from 'react'



export default function App() {
    // const [visible, setVisible] = useState(false);
    const MockItem = ({ text }) => {
        return (
            <Card css={{ h: "$24", $$cardColor: '$colors$primary' }}>
                <Card.Body>
                    <Text h6 size={15} color="white" css={{ mt: 0 }}>
                        {text}
                    </Text>
                </Card.Body>
            </Card>
        );
    };



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
                        color: "gray",

                    }}
                >
                    <Table.Header>
                        <Table.Column></Table.Column>
                        <Table.Column></Table.Column>
                        <Table.Column></Table.Column>
                        <Table.Column></Table.Column>
                        <Table.Column></Table.Column>
                        <Table.Column><h1>ร้านค้าต่างๆ</h1></Table.Column>
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


                    </Row>
                </Grid>


                <Spacer />
                <Table
                    aria-label="Example table with static content"
                    css={{
                        height: "auto",
                        minWidth: "100%",
                    }}
                >
                    <Table.Header>
                        <Table.Column>รูปร้าน</Table.Column>
                        <Table.Column>ชื่อร้าน</Table.Column>
                        <Table.Column>เวลาที่เข้าใช้บริการได้</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row key="1">
                            <Table.Cell><Image
                                width={500}
                                height={100}
                                src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                                alt="Default Image"
                                objectFit="cover"
                            /></Table.Cell>
                            <Table.Cell>กากจิงๆ</Table.Cell>
                            <Table.Cell>21.00-00.00</Table.Cell>
                        </Table.Row>
                        <Table.Row key="2">
                            <Table.Cell><Image
                                width={500}
                                height={100}
                                src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                                alt="Default Image"
                                objectFit="cover"
                            /></Table.Cell>
                            <Table.Cell>กากจิงๆ</Table.Cell>
                            <Table.Cell>21.00-00.00</Table.Cell>
                        </Table.Row>
                        <Table.Row key="3">
                            <Table.Cell><Image
                                width={500}
                                height={100}
                                src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                                alt="Default Image"
                                objectFit="cover"
                            /></Table.Cell>
                            <Table.Cell>กากจิงๆ</Table.Cell>
                            <Table.Cell>21.00-00.00</Table.Cell>
                        </Table.Row>
                        <Table.Row key="4">
                            <Table.Cell><Image
                                width={500}
                                height={100}
                                src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                                alt="Default Image"
                                objectFit="cover"
                            /></Table.Cell>
                            <Table.Cell>กากจิงๆ</Table.Cell>
                            <Table.Cell>21.00-00.00</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                
            </Container>

        </>
    );
}