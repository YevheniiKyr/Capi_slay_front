import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {CAPI_ROUTE} from "../utils/constRoutes";

const CapiFriendItem = observer(({capibara}) => {

    const navigate = useNavigate()

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Col lg={3} md={4} sm={6} xs={12}
        >

            {

                <Container className={"justify-content-center d-flex"}>
                    <Card

                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() => {
                            navigate(CAPI_ROUTE + '/' + capibara.id)
                        }
                        }
                        style={{


                            width: '20rem',
                            cursor: "pointer",
                            marginTop: "3rem",
                            border: 'none',
                            boxShadow: isHovered ? '0 4px 8px rgba(0,0,0,0.2)  ' : 'none',
                            transform: isHovered ? 'scale(1.2)' : 'none',
                            transition: isHovered ? 'all 0.3s ease-in-out' : 'none',
                            zIndex: isHovered ? 1 : 0


                        }}>

                        <Card.Img variant="top" src={require('../static/capibara_1.jpg')}
                                  style={{width: '12rem', height: '10rem', alignSelf: "center", marginTop: "1rem"}}/>
                        <Card.Body>
                            <Card.Title className={"d-flex justify-content-center"}
                                        style={{fontSize: '1.5rem'}}> {capibara.name}</Card.Title>
                            <Card.Text className={"d-flex justify-content-center"} style={{fontSize: '1.2rem'}}>
                                {capibara.description}
                            </Card.Text>
                            <Card.Text className={"d-flex justify-content-center"} style={{fontSize: '1.2rem'}}>
                                {capibara.money}$
                            </Card.Text>

                            <Card.Text className={"d-flex justify-content-center"} style={{fontSize: '1.2rem'}}>
                                {capibara.weight}kg
                            </Card.Text>
                            <Card.Text className={"d-flex justify-content-center"} style={{fontSize: '1.2rem'}}>
                                {capibara.power}N
                            </Card.Text>
                            <Form>
                                <Row>
                                    <Button

                                        style={{
                                            width: '5rem',
                                            height: '2rem',
                                            fontSize: '1rem',
                                            justifyContent: "center",
                                            verticalAlign: "center"
                                        }}
                                        className={"d-flex m-auto btn-success"}
                                        onClick={() => {
                                            navigate(CAPI_ROUTE + '/' + capibara.id)

                                        }

                                        }>detail</Button>
                                    <Button

                                        style={{
                                            width: '6rem',
                                            height: '2rem',
                                            fontSize: '1rem',
                                            justifyContent: "center",
                                            verticalAlign: "center"
                                        }}
                                        className={"d-flex m-auto btn-danger"}
                                        onClick={() => {
                                            navigate(CAPI_ROUTE + '/' + capibara.id)

                                        }

                                        }>Unfriend</Button>
                                </Row>
                            </Form>

                        </Card.Body>
                    </Card>
                </Container>


            }
        </Col>
    );
})

export default CapiFriendItem;