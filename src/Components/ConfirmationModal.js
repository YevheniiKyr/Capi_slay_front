import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, MAIN_ROUTE} from "../utils/constRoutes";
import {Button, Container, Modal} from "react-bootstrap";
import {Context} from "../index";
import {deleteUserCapi} from "../http/capiApi";

const ConfirmationModal = observer(({show, onHide}) => {

    const navigate = useNavigate()
    const{currentUser} = useContext(Context)

    const confirmDelete = () => {
        deleteUserCapi(currentUser.capi.id).then(d => navigate(MAIN_ROUTE))
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >

            <Modal.Body style = {{textAlign: 'center' }}>
                 Ви впевнені, що хочете зробити капі-суїцид?
            </Modal.Body>
            <Modal.Footer>
                <Container className={'d-flex justify-content-center'}>
                    <Button style={{marginRight: '3rem'}} variant="outline-danger" onClick={onHide}>НІ</Button>
                    <Button variant="outline-success" onClick={confirmDelete}>ТАК</Button>
                </Container>
            </Modal.Footer>
        </Modal>
    );
})

export default ConfirmationModal;