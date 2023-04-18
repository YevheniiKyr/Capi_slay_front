import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {connectCapis, deleteConnection, fetchCapi, findConnection, marryCapi} from "../http/capiApi";
import {Button, Card, Container, Form} from "react-bootstrap";
import {MAIN_ROUTE} from "../utils/constRoutes";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import AuthorizeFirstModal from "../Components/AuthorizeFirstModal";

const CapibaraPage = observer(() => {

        const {id} = useParams()
        const [capi, setCapi] = useState({})
        const navigate = useNavigate()

        const {currentUser, capibaras} = useContext(Context)
        const [isFriend, SetIsFriend] = useState(false)
        const [isSpouse, SetIsSpouse] = useState(false)
        const [authorizeVisible, setAuthorizeVisible] = useState(false)


        useEffect(() => {

            fetchCapi(id).then(data => {
                setCapi(data)
                if (currentUser.capiFriends?.length > 0) {
                    const capiFriends = currentUser.capiFriends.map(capi => capi.id)
                    SetIsFriend(capiFriends.includes(data.id))

                }
                if(currentUser.capiSpouse){
                    SetIsSpouse(currentUser.capiSpouse.id === data.id)
                }
            })

        }, [])


        const propose = (relationship) => {

            //  const connection_type = capibaras.connectionTypes.find(con => con.name === relationship)
            //   console.log("CONNECTION TYPE ID " + connection_type.id)
            const connection = {
                capi_1: capi.id,
                capi_2: currentUser.capi.id,
                connection_type: relationship,
                status: 'proposed'
            }
            console.log("propose")
            connectCapis(currentUser.capi.id, capi.id, relationship, 'proposed').then(data => {
             console.log(data)
            })
        }
        const unfriend = () => {
            console.log("We are here " + currentUser.capi.id + ' ' + capi.id)

            findConnection(currentUser.capi.id, capi.id, "friends")
                .then(connection => {
                    console.log(connection)
                    deleteConnection(connection[0].id).then(r => console.log(r))
                })
        }

        const divorce = () => {
            console.log("DIV")
            findConnection(currentUser.capi.id, capi.id, "married")
                .then(connection => {
                    console.log("CON")
                    console.log(connection)
                    deleteConnection(connection[0].id).then(r => console.log(r))
                })
        }

        return (


            <Container className={"d-flex justify-content-center"}>

                <Card
                    style={{width: '40vw', border: 'none', boxShadow: "0 4px 8px rgba(0,0,0,0.2)", marginTop: "20px"}}>
                    <Card.Img src={require('../static/capibara_1.jpg')}
                              style={{width: '25vw', height: '25vw', alignSelf: "center", marginTop: "5vw",}}/>
                    <Card.Body>
                        <Card.Title className={"d-flex justify-content-center"}
                                    style={{fontSize: "4vw"}}> {capi.name}</Card.Title>
                        <Card.Text className={"d-flex justify-content-center"} style={{fontSize: "3vw"}}>
                            {capi.description}
                        </Card.Text>

                        <Form className={"d-flex justify-content-center "}>
                            <Button size={"lg"}
                                    style={{fontSize: '1rem'}}
                                    className={isSpouse ? "mt-3 me-5 btn-danger" : "mt-3 me-5 btn-info"}
                                    onClick={
                                        currentUser.isAuth ?
                                            isSpouse ? () => divorce() : () => propose('married')
                                            : () => setAuthorizeVisible(true)
                                    }
                            >
                                {
                                    isSpouse ? "DIVORCE" : "MARRY"


                                }
                            </Button>
                            {
                                isSpouse?
                                    <></>
                                    :
                            <Button size={"lg"}
                                    style={{fontSize: '1rem'}}
                                    className={isFriend ? "mt-3 btn-danger" : "mt-3 btn-success"}
                                    onClick={
                                        currentUser.isAuth ?

                                            isFriend ? () => unfriend() : () => propose('friends')
                                            :
                                            () => setAuthorizeVisible(true)
                                    }

                            > {isFriend ? "UNFRIEND" : "FRIEND"}</Button>
                            }
                        </Form>

                    </Card.Body>
                </Card>
                <AuthorizeFirstModal show={authorizeVisible} onHide={() => setAuthorizeVisible(false)}/>

            </Container>


        )


    }
)

export default CapibaraPage;