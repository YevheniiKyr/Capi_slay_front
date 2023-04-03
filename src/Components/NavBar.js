import React, {useContext} from 'react';
import {Button, Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {CREATE_CAPI_ROUTE, LOGIN_ROUTE, MAIN_ROUTE} from "../utils/constRoutes";

const NavBar = observer(() => {

    const navigate = useNavigate()

    const {currentUser} = useContext(Context)

    return (

        <Navbar bg="light" variant="dark">
            <Container>
                <Button
                    onClick=
                        {() => {
                            navigate(MAIN_ROUTE)

                        }}
                    variant={"light"}>

                    All Frogs </Button>


                <Nav className="ml-auto ">
                    <Button
                        size={"lg"}
                        variant={"light"}
                        style={{marginRight: 15, border: 'none'}}
                        onClick=
                            {() => {
                                navigate(CREATE_CAPI_ROUTE)
                            }

                            }

                    >
                        CREATE CAPI
                    </Button>
                    {currentUser.isAuth?
                        <Button
                            size={"lg"}
                            variant={"light"}
                            style={{marginRight: 15, border: 'none'}}
                            onClick=
                                {() => {
                                    navigate(LOGIN_ROUTE)
                                }

                                }

                        >
                            LOGOUT </Button>
                        :
                        <Button
                        size={"lg"}
                        variant={"light"}
                        style={{marginRight: 15, border: 'none'}}
                        onClick=
                            {() => {
                                navigate(LOGIN_ROUTE)
                            }

                            }

                    >
                        LOGIN </Button>
                    }
                </Nav>


            </Container>
        </Navbar>

    );
})

export default NavBar;