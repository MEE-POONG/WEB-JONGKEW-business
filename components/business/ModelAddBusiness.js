import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text, Grid, Radio, Spacer } from "@nextui-org/react";




export default function ModelAddBusiness() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
    };
    return (
        <div>
            <Button auto color="warning" shadow onClick={handler}>
                เพิ่มร้าน
            </Button>
            <Modal
                closeButton
                blur

                width="90vw"
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text b size={18}>
                    <Input
                                clearable
                                fullWidth
                                color="primary"
                                size="lg"
                                label="ชื่อร้าน"
                                placeholder="ชื่อร้าน"
                            />
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Grid.Container gap={4}>
                        <Grid xs={6}>
                            <Input
                                clearable
                                fullWidth
                                type="image"
                                color="primary"
                                size="lg"
                                label="เพิ่มรูปภาพ2"
                                placeholder="เพิ่มรูปภาพ2"
                            />
                        </Grid>
                        <Grid>
                            <Input
                                clearable
                                fullWidth
                                type="image"
                                color="primary"
                                size="lg"
                                label="เพิ่มรูปภาพ3"
                                placeholder="เพิ่มรูปภาพ3"
                            />
                        </Grid>
                        <Grid>
                            <Input
                                clearable
                                fullWidth
                                color="primary"
                                size="lg"
                                type="image"
                                label="เพิ่มรูปภาพ4"
                                placeholder="เพิ่มรูปภาพ4"
                            />
                        </Grid>
                        <Grid>
                            <Input
                                clearable
                                fullWidth
                                color="primary"
                                size="lg"
                                label="เพิ่มรายละเอียดร้าน"
                                placeholder="เพิ่มรายละเอียดร้าน"
                            />
                        </Grid>
                        <Grid>
                            <Input
                                clearable
                                fullWidth
                                color="primary"
                                size="lg"
                                label="เลือกจำนวนที่นั่ง"
                                placeholder="เลือกจำนวนที่นั่ง"
                            />
                        </Grid>
                        <Grid>
                            <Input
                                clearable
                                fullWidth
                                color="primary"
                                size="lg"
                                label="วันที่จะเข้าใช้บริการได้"
                                placeholder="วันที่จะเข้าใช้บริการได้"
                            />
                        </Grid>
                        <Grid>
                            <Input
                                clearable
                                fullWidth
                                color="primary"
                                size="lg"
                                label="เวลาที่เข้าใช้บริการได้"
                                placeholder="เวลาที่เข้าใช้บริการได้"
                            />
                        </Grid>
                        
                    </Grid.Container>
                    <Spacer />
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                        Close
                    </Button>
                    <Button auto onClick={closeHandler}>
                        เพิ่ม
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}
