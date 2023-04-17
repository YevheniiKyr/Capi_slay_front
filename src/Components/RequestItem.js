import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {
    answerConnection, deleteConnection,
    fetchCapi,
    fetchConnectionType,

} from "../http/capiApi";
import {useNavigate} from "react-router-dom";
import {CAPI_ROUTE} from "../utils/constRoutes";

const RequestItem = ({request}) => {

    const {currentUser} = useContext(Context)
    const [capi, setCapi] = useState({})
    const [connectionType, setConnectionType] = useState({})
    const navigate = useNavigate()

    const relationship = (name) => {
        switch (name) {
            case "married":
                return 'love';
            case "friends":
                return "friend"
        }


    }
    const approve = () => {
        console.log("APPROVE")
        const connection = {}
        answerConnection(request, "approved").then(data => {
            console.log(data)
        })
    }
    const decline = () => {
        answerConnection(request, "declined").then(data => {
            console.log(data)

        })
    }
    const cancel = () => {
        deleteConnection(request.id).then(data => {
            console.log(data)
        })
        currentUser.setRequests(currentUser.requests.filter(req => req.id !== request.id))
    }

    useEffect(() => {
            console.log("REQ " + request)
            request.capi_1 === currentUser.capi.id ?
                fetchCapi(request.capi_2).then(capi => setCapi(capi))
                :
                fetchCapi(request.capi_1).then(capi => setCapi(capi))
            fetchConnectionType(request.connection_type_id).then(con => setConnectionType(con))
        }
        , [])


    return (
        <Container className={'mt-3'}>
            <Card
                onClick={(event) => {
                    // Check if the clicked element is a button
                    if (event.target.tagName !== 'BUTTON') {
                        // Navigate to the specified route
                        navigate(CAPI_ROUTE + '/' + capi.id);
                    }
                }}>
                <Card.Body>
                    <Card.Title className={'d-flex justify-content-center'}>
                        {
                            currentUser.capi.id === request.capi_1 ?
                                `You make request to ${capi.name}`
                                :
                                `Request from ${capi.name}`
                        }
                    </Card.Title>
                    <Card.Text className={'d-flex justify-content-center'}>
                        {
                            currentUser.capi.id === request.capi_1 ?
                                `You want to be ${capi.name}'s ${relationship(connectionType.name)}`
                                :
                                `${capi.name} wants to be your ${relationship(connectionType.name)}`
                        }
                    </Card.Text>
                    {
                        currentUser.capi.id === request.capi_1 ?
                            <Container className={'d-flex justify-content-center'}>
                                <Button
                                    className={'btn-danger'}
                                    onClick={cancel}
                                >Cancel</Button>
                            </Container>
                            :
                            <Form className={'d-flex justify-content-center'}>
                                <Button
                                    className={'btn-success me-4'}
                                    onClick={approve}
                                >Accept</Button>
                                <Button
                                    className={'btn-danger'}
                                    onClick={decline}
                                >Decline</Button>

                            </Form>
                    }
                </Card.Body>
            </Card>
        </Container>
    );
};

export default RequestItem;