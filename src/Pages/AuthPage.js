import React, {useContext, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {LOGIN_ROUTE, SIGNUP_ROUTE, MAIN_ROUTE} from "../utils/constRoutes";
import {login, registration} from "../http/authApi";


const Auth = observer(() => {

    const navigate = useNavigate()
    const location = useLocation()
    const isRegistration = location.pathname === SIGNUP_ROUTE
    const {currentUser} = useContext(Context)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


    const signUp = async () => {

        try {
            const response = await registration(name, password)
            console.log("REGISTRATED")
            currentUser.setUser(response)
            currentUser.setIsAuth(true)

            navigate(MAIN_ROUTE)
        } catch (e) {
            console.log(e)
        }

    }
    const signIn = async () => {
        try {
            console.log("SIGN IN")
            login(name, password).then(user_data => {
                currentUser.setUser(user_data)
                currentUser.setIsAuth(true)
                console.log("USER ID " + user_data._id)
                console.log("USER ROLE " + user_data.role )
                console.log("USER email " + user_data.email)

                navigate(MAIN_ROUTE)
            })
        }catch (e) {
            alert("Неправильне ім'я чи пароль")
        }
    }

    return (
        <
            Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 60}}

        >
            <Card style={{width: 600, border: 'none', boxShadow: "0 4px 8px rgba(0,0,0,0.2)"}} className="p-5">
                <h2 className="m-auto">{isRegistration ?
                    "Реєстрація" : 'Авторизація'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть ім'я..."
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />




                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isRegistration ?

                            <div>
                                <Link to={LOGIN_ROUTE}>Увійти</Link>
                            </div>
                            :
                            <div>
                                <Link to={SIGNUP_ROUTE}>Зареєструватися</Link>
                            </div>
                        }
                        <Button
                            className={"mt-2 btn-success"}

                            onClick={isRegistration ? signUp : signIn}
                        >
                            {isRegistration ? "Реєстрація" : 'Авторизація'}
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>


    );

})


export default Auth;