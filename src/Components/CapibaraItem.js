import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {CAPI_ROUTE} from "../utils/constRoutes";
import {Context} from "../index";
import {deleteConnection, deleteFriend, fetchConnections, findConnection} from "../http/capiApi";

const CapibaraItem = observer(({capibara}) => {

    const navigate = useNavigate()

    const [isHovered, setIsHovered] = useState(false);

    const {currentUser} = useContext(Context)
    console.log("CAPI FRIENDS " + currentUser.capiFriends)
    const isFriend = currentUser?.capiFriends?.includes(capibara)
    const isSpouse = currentUser?.capiSpouse === capibara

    const unfriend = () => {
        console.log("We are here " + currentUser.capi.id + ' ' + capibara.id)

       findConnection(currentUser.capi.id, capibara.id, "friends")
           .then(connection => {
               console.log(connection)
            deleteConnection(connection[0].id).then(r => console.log(r))
        })
    }
    const divorce = () => {
        findConnection(currentUser.capi.id, capibara.id, "spouse")
            .then(connection => {
                console.log(connection)
                deleteConnection(connection[0].id).then(r => console.log(r))
            })
    }



    return (
        <Col lg={3} md={4} sm={6} xs={12}
        >

            {

                <Container className={"justify-content-center d-flex"}>
                    <Card

                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={(event) => {
                            // Check if the clicked element is a button
                            if (event.target.tagName !== 'BUTTON') {
                                // Navigate to the specified route
                                navigate(CAPI_ROUTE + '/' + capibara.id);
                            }
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
                            <Card.Text className={"d-flex justify-content-center"} style={{fontSize: '1.0rem'}}>
                                {capibara.description}
                            </Card.Text>
                            <Card.Text className={"d-flex justify-content-center"} style={{fontSize: '1.0rem'}}>
                                {capibara.money}$
                            </Card.Text>

                            <Card.Text className={"d-flex justify-content-center"} style={{fontSize: '1.0rem'}}>
                                {capibara.weight}kg
                            </Card.Text>
                            <Card.Text className={"d-flex justify-content-center"} style={{fontSize: '1.0rem'}}>
                                {capibara.power}N
                            </Card.Text>
                            <Form>
                                <Row>
                                    <Button

                                        style={{
                                            width: '4rem',
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
                                    {
                                        isFriend ?
                                            <Button

                                                style={{
                                                    width: '6rem',
                                                    height: '2rem',
                                                    fontSize: '1rem',
                                                    justifyContent: "center",
                                                    verticalAlign: "center"
                                                }}
                                                className={"d-flex m-auto btn-danger"}
                                                onClick={
                                                    unfriend
                                                }

                                            >Unfriend</Button>
                                            :
                                            <></>
                                    }

                                    {
                                        isSpouse ?
                                            <Button

                                                style={{
                                                    width: '6rem',
                                                    height: '2rem',
                                                    fontSize: '1rem',
                                                    justifyContent: "center",
                                                    verticalAlign: "center"
                                                }}
                                                className={"d-flex m-auto btn-danger"}
                                                onClick={
                                                    divorce
                                                }

                                            >Divorce</Button>
                                            :
                                            <></>
                                    }
                                </Row>
                            </Form>

                        </Card.Body>
                    </Card>
                </Container>


            }
        </Col>
    );
})

export default CapibaraItem;