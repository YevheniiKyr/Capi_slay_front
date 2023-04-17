import React from 'react';
import {observer} from "mobx-react-lite";
import AuthPage from "../Pages/AuthPage";
import {LOGIN_ROUTE} from "../utils/constRoutes";
import {useNavigate} from "react-router-dom";
import {Button, Container, Modal} from "react-bootstrap";

const AuthorizeFirstModal = observer(({show, onHide}) => {

    const navigate = useNavigate()

    const authorize = () => {
        navigate(LOGIN_ROUTE)
        }


    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >

            <Modal.Body style = {{textAlign: 'center' }}>
              Авторизуйтесь спершу
            </Modal.Body>
            <Modal.Footer>
                <Container className={'d-flex justify-content-center'}>
                <Button style={{marginRight: '3rem'}} variant="outline-danger" onClick={onHide}>Закрити</Button>
                <Button variant="outline-success" onClick={authorize}>Авторизуватись</Button>
                </Container>
            </Modal.Footer>
        </Modal>
    );
})

export default AuthorizeFirstModal;