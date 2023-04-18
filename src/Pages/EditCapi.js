import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {Context} from "../index";
import {createCapi, updateCapi} from "../http/capiApi";
import {CAPI_ROUTE, MY_CAPI_ROUTE} from "../utils/constRoutes";
import {Button, Card, Form} from "react-bootstrap";

const EditCapi = observer(({show, onHide}) => {


        const {currentUser} = useContext(Context)

        const [name, setName] = useState(currentUser.capi.name)
        const [desc, setDesc] = useState(currentUser.capi.description)
        const [file, setFile] = useState(null)

        const navigate = useNavigate()


        const selectFile = e => {
            setFile(e.target.files[0])
        }

        const editCapi = async () => {
            const capiData = new FormData();

            console.log("ID " + currentUser.capi.id)
            capiData.append('name', name)
            capiData.append('description', desc)
            capiData.append('image', file)
            capiData.append('user_id', currentUser.user.id)
            capiData.append('id', currentUser.capi.id)

            await updateCapi(capiData).then(capi => {
                currentUser.setCapi(capi)
                console.log(capi)
            })
            navigate(MY_CAPI_ROUTE)

        }
        return (
            <Card className={"mt-5"}>
                <Card.Body>
                    <Card.Title id="contained-modal-title-vcenter">
                        Редагувати капібару
                    </Card.Title>
                    <Form>
                        <Form.Control
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="mt-2"
                            placeholder="Ім'я"
                        />

                        <Form.Control
                            value={desc}
                            onChange={e => setDesc(e.target.value)}
                            className="mt-2"
                            placeholder="Опиши свою капібару"
                        />

                        <Form.Control
                            className="mt-3"
                            type="file"
                            onChange={selectFile}
                        />
                    </Form>


                </Card.Body>
                <Button onClick={editCapi}>
                    SAVE </Button>
            </Card>


        );
    }
)

export default EditCapi;