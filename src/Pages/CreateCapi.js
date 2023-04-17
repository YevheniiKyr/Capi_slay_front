import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {createCapi, fetchCapi, fetchCapiByUser} from "../http/capiApi";
import {Button, Card, Form} from "react-bootstrap";
import {CAPI_ROUTE} from "../utils/constRoutes";
import {useNavigate} from "react-router-dom";

const CreateCapi = observer(({show, onHide}) => {


        const [name, setName] = useState('')
        const [desc, setDesc] = useState('')
        const [file, setFile] = useState(null)

        const navigate = useNavigate()

        const {currentUser} = useContext(Context)
        const selectFile = e => {
            setFile(e.target.files[0])
        }

        const addCapi = () => {
            const capiData = new FormData();

            capiData.append('name', name)
            capiData.append('description', desc)
            capiData.append('image', file)
            capiData.append('user_id', currentUser.user.id)

            createCapi(capiData).then(capi => {
                currentUser.setCapi(capi)
            })
            navigate(CAPI_ROUTE + '/' + currentUser.capi.id)
        }
        return (
            <Card className={"mt-5"}>
                <Card.Body>
                    <Card.Title id="contained-modal-title-vcenter">
                        Створити капібару
                    </Card.Title>
                    <Form>
                        <Form.Control
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="mt-2"
                            placeholder="Введіть ім'я капібари"
                        />

                        <Form.Control
                            value={desc}
                            onChange={e => setDesc(e.target.value)}
                            className="mt-2"
                            placeholder="Опишіть свою капі"
                        />

                        <Form.Control
                            className="mt-3"
                            type="file"
                            onChange={selectFile}
                        />
                    </Form>


                </Card.Body>
                <Button onClick={addCapi}>
                    CREATE </Button>
            </Card>


        );
    }
)


export default CreateCapi;