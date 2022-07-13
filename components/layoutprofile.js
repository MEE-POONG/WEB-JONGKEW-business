import { Button, Card, Container, Grid, Row, Spacer, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userInfoState } from "../context/states";
import Image from 'next/image';
import { LockIcon } from "./icons/LockIcon";

export default function Layoutprofile({ children }) {
    // const setUserInfo = useSetRecoilState(userInfoState)

    const router = useRouter();
    // const [userInfo] = useRecoilState(userInfoState)
    // const [slideBar, setSlideBar] = useState(false);
    // useEffect(() => {
    //     if (userInfo.username) {
    //         setSlideBar(true);
    //         if (router.pathname === "/") {
    //             router.push("/dashboard");
    //         }
    //     } else {
    //         setSlideBar(false);
    //         router.push("/");
    //     }
    // }, [userInfo.username]);

    // if (slideBar) {
        return (
            <>
                <Grid.Container>
     
                    <Grid xs={5} md={5}>
                        <Container color="white" style={{ minHeight: '100vh' }}>
                            <Spacer />
                            {children}
                            <Spacer />
                        </Container>
                    </Grid>
                </Grid.Container>
            </>
        )
    // } else {
    //     return <>
    //         <main>{children}</main>
    //     </>;
    // }
}