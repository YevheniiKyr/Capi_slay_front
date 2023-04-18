import React, {useContext} from 'react';
import {Button, Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {

    CREATE_CAPI_ROUTE,
    FAMILY_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE, MY_CAPI_ROUTE, REQUESTS_ROUTE

} from "../utils/constRoutes";

const NavBar = observer(() => {

    const navigate = useNavigate()

    const {currentUser, connections} = useContext(Context)

    const logout  = () => {

        navigate(LOGIN_ROUTE)
        currentUser.setUser(null)
        currentUser.setIsAuth(false)
        currentUser.setCapi(null)
        currentUser.setCapiFriends([])
        currentUser.setCapiSpouse(null)
        localStorage.removeItem('token');

    }


    return (

        <Navbar bg="light" variant="dark">
            <Container>

                <Button
                    onClick=
                        {() => {
                            navigate(MAIN_ROUTE)

                        }}
                    variant={"light"}>

                    All Capis
                </Button>


                <Nav className="ml-auto ">



                    {currentUser.isAuth ?
                        <Nav>
                        <Button
                            size={"lg"}
                            variant={"light"}
                            style={{marginRight: 15, border: 'none'}}
                            onClick=
                                {() => {
                                    currentUser.capi ?
                                        navigate(MY_CAPI_ROUTE)
                                        :
                                        navigate(CREATE_CAPI_ROUTE)
                                }
                                }

                        >
                            {currentUser.capi ? "MY CAPI" : "CREATE CAPI"}
                        </Button>
                        <Button
                            size={"lg"}
                            variant={"light"}
                            style={{marginRight: 15, border: 'none'}}
                            onClick=
                                {logout}

                        >
                            LOGOUT </Button>
                        </Nav>
                        :
                        <Nav>
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
                        </Nav>

                    }
                    {
                        currentUser.capi?
                            <Nav>
                            <Button
                                size={"lg"}
                                variant={"light"}
                                style={{marginRight: 15, border: 'none'}}
                                onClick=
                                    {() => {
                                        navigate(FAMILY_ROUTE)
                                    }

                                    }

                            >


                                Family {currentUser.capiFriends? currentUser.capiFriends.length + currentUser.capiSpouse? 1: 0  : currentUser.capiSpouse? 1: 0} </Button>
                            <Button
                                size={"lg"}
                                variant={"light"}
                                style={{marginRight: 15, border: 'none'}}
                                onClick=
                                    {() => {
                                        navigate(REQUESTS_ROUTE)
                                    }

                                    }

                            >
                                Requests {currentUser.requests.length} </Button>
                            </Nav>
                            :
                            <></>
                    }
                </Nav>


            </Container>
        </Navbar>

    );
})

export default NavBar;