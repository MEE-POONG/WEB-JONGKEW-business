import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text, Grid, Radio, Spacer, Progress } from "@nextui-org/react";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import ModelDateBusiness from '@/components/business/ModelDateBusiness'
import ModelTimeBusiness from '@/components/business/ModelTimeBusiness'

function ValueLabelComponent(props) {
    const { children, value } = props;
  
    return (
      <Tooltip enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }
  
  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    value: PropTypes.number.isRequired,
  };

  const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 37,
  },
  {
    value: 100,
  },
];
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
                        <Grid xs={4}>
                            <Input
                                clearable
                                fullWidth
                                type="file"
                                color="primary"
                                size="lg"
                                label="เพิ่มรูปภาพ2"
                                placeholder="เพิ่มรูปภาพ2"
                            />
                        </Grid>
                        <Grid xs={4}>
                            <Input
                                clearable
                                fullWidth
                                type="file"
                                color="primary"
                                size="lg"
                                label="เพิ่มรูปภาพ3"
                                placeholder="เพิ่มรูปภาพ3"
                            />
                        </Grid>
                        <Grid xs={4}>
                            <Input
                                clearable
                                fullWidth
                                color="primary"
                                size="lg"
                                type="file"
                                label="เพิ่มรูปภาพ4"
                                placeholder="เพิ่มรูปภาพ4"
                            />
                        </Grid>
                        <Grid xs={4}>
                        
                        <Typography gutterBottom>เลือกจำนวนที่นั่งสูงสุด</Typography>
                        <Slider 
                        defaultValue={50} 
                        aria-label="Default" 
                        valueLabelDisplay="auto" 
                        />
                        </Grid>
                        <Grid xs={4}>
                            <ModelDateBusiness/>
                        </Grid>
                        
                        <Grid xs={4}>
                            <ModelTimeBusiness/>
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
