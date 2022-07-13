import React from "react";
import { Container } from "react-bootstrap";
import Business from "../../layouts/Business";
import Table from 'react-bootstrap/Table';
import { BsMessenger, BsReceipt } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { AiFillMessage,AiTwotoneCalendar } from 'react-icons/ai';


export default function BusinessList() {
    return (
        <>
            <div className="text-center"><h1>ร้านค้าต่างๆ</h1></div>
            <Container className="business-list">
                <Table>
                    <thead>
                        <tr>
                            <th><AiFillMessage size={30} /></th>
                            <th><AiTwotoneCalendar size={30} /></th>
                            <th><BiTimeFive/></th>
                            <th>Username</th>
                        </tr>
                    </thead>

                </Table>
            </Container>

        </>
    );
}

BusinessList.layout = Business;
