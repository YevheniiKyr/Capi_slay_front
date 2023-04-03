import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {fetchCapi} from "../http/capiApi";
import {Button, Card, Container, Form} from "react-bootstrap";
import {MAIN_ROUTE} from "../utils/constRoutes";
import {observer} from "mobx-react-lite";

const CapibaraPage = observer(() => {

        const {id} = useParams()
        const [capi, setCapi] = useState({})
        const navigate = useNavigate()


        useEffect(() => {
            fetchCapi(id).then(data => {
                setCapi(data)
            })
        }, [])

        return (


            <Container className={"d-flex justify-content-center"}>

                <Card
                    style={{width: '40vw', border: 'none', boxShadow: "0 4px 8px rgba(0,0,0,0.2)", marginTop: "20px"}}>
                    <Card.Img src={require('../static/capibara_1.jpg')}
                              style={{width: '18vw', height: '18vw', alignSelf: "center", marginTop: "5vw",}}/>
                    <Card.Body>
                        <Card.Title className={"d-flex justify-content-center"}
                                    style={{fontSize: "7vw"}}> {capi.name}</Card.Title>
                        <Card.Text className={"d-flex justify-content-center"} style={{fontSize: "3vw"}}>
                            {capi.description}
                        </Card.Text>

                        <Form className={"d-flex justify-content-center "}>
                            <Button size={"lg"}
                                    className={"mt-3 me-5 btn-info"}
                            >
                                GET CAPI
                            </Button>

                            <Button size={"lg"}
                                    className={"mt-3 btn-success"} onClick={() => {
                                navigate(MAIN_ROUTE + '/' + 2)
                            }}> LIKE </Button>
                        </Form>

                    </Card.Body>
                </Card>
            </Container>


        )


    }
)

export default CapibaraPage;