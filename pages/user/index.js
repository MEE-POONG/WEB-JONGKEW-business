import { DeleteIcon } from "@/components/icons/DeleteIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { EyeIcon } from "@/components/icons/EyeIcon";
import { IconButton } from "@/components/icons/IconButton";
import { LockIcon } from "@/components/icons/LockIcon";
import { AiOutlineUser, AiFillMessage, AiOutlineHistory, AiTwotoneTags, AiTwotoneBell } from "react-icons/ai";
import Image from 'next/image';
import Layout from "@/components/layout";
import ModelAddBusiness from "@/components/business/ModelAddBusiness";
import ModelSlideBusiness from "@/components/business/ModelSlideBusiness"
import ModelTableBusiness from "@/components/business/ModelTableBusiness"
import { Col, Container, Grid, Input, Row, Spacer, Table, Tooltip, Progress, User } from "@nextui-org/react";
import Head from "next/head";
import { useState } from 'react'

export default function Business() {
    const [visible, setVisible] = useState(false);

    return (
        <Container>
                <Spacer />
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                <title> Business | JONGKEW</title>
                <meta
                    name="description"
                    content="Business JONGKEW"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                
                    <div class="row">
                        <div class="col">
                            ยินดีต้อนรับ
                            <h1> JONGKEW </h1>
                        </div>
                        <div class="col-md-auto">
                        </div>
                        <div class="col col-lg-1">
                            <User
                                bordered
                                name="Ariana Wattson"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                color="warning"
                                size="xl"
                            />
                        </div>
                    </div>
                
                




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
                        <Table.Column><h1></h1></Table.Column>
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

           

                <Spacer />
                <Grid.Container gap={9}>
                    <Grid xs={4}>
                        <ModelTableBusiness/>
                    </Grid>
                    <Grid xs={4}>
                        <ModelTableBusiness/>
                    </Grid>
                    <Grid xs={4}>
                        <ModelTableBusiness/>
                    </Grid>
                </Grid.Container>

            </Container>
        </Container>
    );
}