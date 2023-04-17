import React, {useContext} from 'react';
import {Context} from "../index";
import {Card, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import RequestItem from "../Components/RequestItem";

const RequestsPage = observer(() => {

    const {currentUser} = useContext(Context)

    return (
        <Container>
            {
                currentUser.requests.length?
                currentUser.requests.map(req =>
                   <RequestItem key = {req.id} request = {req}/>
                )
                    :
                    <img src={require('../static/capi_glass.jpg')}  alt="capi"/>
            }

        </Container>
    );
})

export default RequestsPage;