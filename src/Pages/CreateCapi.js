import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {createCapi} from "../http/capiApi";
import {Card, Form} from "react-bootstrap";

const CreateCapi = observer(({show, onHide}) => {

        const {product} = useContext(Context)

        const [name, setName] = useState('')
        const [desc, setDesc] = useState('')
        const [file, setFile] = useState(null)
        const [selectedCategory, setSelectedCategory] = useState({name: null, _id: null})


        const selectFile = e => {
            setFile(e.target.files[0])
        }

        const addProduct = () => {
            const capiData = new FormData();
            capiData.append('name', name)
            capiData.append('description', desc)
            capiData.append('image', file)

            createCapi(capiData).then(r => console.log('wow'))
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
            </Card>


        );
    }
)


export default CreateCapi;