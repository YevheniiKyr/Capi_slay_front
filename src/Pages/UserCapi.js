import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {connectCapis, fetchCapi, marryCapi} from "../http/capiApi";
import {Button, Card, Container, Form} from "react-bootstrap";
import {CREATE_CAPI_ROUTE, EDIT_CAPI_ROUTE, MAIN_ROUTE} from "../utils/constRoutes";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ConfirmationModal from "../Components/ConfirmationModal";


const UserCapi = observer(() => {


        const navigate = useNavigate()

        const {currentUser, capibaras} = useContext(Context)

        const [confirmationVisible, setConfirmationVisible] = useState(false)

        useEffect(() => {


        }, [currentUser?.capi?.id])


        return (


            <Container className={"d-flex justify-content-center"}>

                <Card
                    style={{width: '50vw', border: 'none', boxShadow: "0 4px 8px rgba(0,0,0,0.2)", marginTop: "20px"}}>
                    <Card.Img src={require('../static/capibara_1.jpg')}
                              style={{width: '25vw', height: '25vw', alignSelf: "center", marginTop: "5vw",}}/>
                    <Card.Body>
                        <Card.Title className={"d-flex justify-content-center"}
                                    style={{fontSize: "4vw"}}> {currentUser?.capi?.name}</Card.Title>
                        <Card.Text className={"d-flex justify-content-center"} style={{fontSize: "3vw"}}>
                            {currentUser?.capi?.description}
                        </Card.Text>

                        <Form className={"d-flex justify-content-center "}>
                            <Button size={"lg"}
                                    style={{fontSize: '1rem'}}
                                    className={"mt-3 me-5 btn-info"}
                                    onClick={() => navigate(EDIT_CAPI_ROUTE)}

                            >
                                EDIT
                            </Button>

                            <Button size={"lg"}
                                    style={{fontSize: '1rem'}}
                                    className={"mt-3 btn-danger"}
                                    onClick={() => setConfirmationVisible(true)}

                            > SUICIDE </Button>
                        </Form>

                    </Card.Body>
                </Card>
                <ConfirmationModal show={confirmationVisible} onHide =  {() => setConfirmationVisible(false)} ></ConfirmationModal>
            </Container>


        )


    }
)

export default UserCapi;