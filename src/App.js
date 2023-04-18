import logo from './logo.svg';
import './App.css';
import {useContext, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import NavBar from "./Components/NavBar";
import {Context} from "./index";
import {check} from "./http/authApi";
import {Spinner} from "react-bootstrap";
import {
    fetchCapi,
    fetchCapiByUser,
    fetchCapiFriends,
    fetchConnections,
    fetchConnectionTypes, fetchRequests,
    fetchSpouse
} from "./http/capiApi";

function App() {


    const [loading, setLoading] = useState(true)
    const {currentUser, capibaras, connections} = useContext(Context)

    useEffect(() => {

        if (localStorage.getItem('token')) {
            check().then(user_data => {
                currentUser.setUser(user_data)
                console.log(user_data)
                currentUser.setIsAuth(true)
                return fetchCapiByUser(currentUser.user.id)
            }).then(data => {
                currentUser.setCapi(data)
                console.log("Capi " + data)
                return fetchConnections(currentUser.capi.id)
            }).then(data => {
                connections.setConnections(data)
                fetchCapiFriends(currentUser.capi.id).then(data => {
                    currentUser.setCapiFriends(data)
                })
                fetchSpouse(currentUser.capi.id).then(data => {
                    currentUser.setCapiSpouse(data)
                })
                fetchRequests(currentUser.capi.id, 'proposed').then(data => {
                    currentUser.setRequests(data)
                })
            })
                .finally(() => setLoading(false))

        }

        setLoading(false)
    }, [])


    useEffect(() => {
        //цей фетч треба робити коли є  юзер капі ід
        //

           setInterval(() => {
                if (currentUser?.capi?.id) {
                    console.log("DO IT")
                    fetchRequests(currentUser.capi.id, 'proposed').then(data => {

                        currentUser.setRequests(data)
                        console.log("LEN " +data.length)
                    })
                    fetchCapiFriends(currentUser.capi.id).then(data => {
                        currentUser.setCapiFriends(data)
                    })
                    fetchSpouse(currentUser.capi.id).then(data => {
                        currentUser.setCapiSpouse(data)
                    })
                }
            }, 10000)


        }
    )




    if (loading) {
        //  console.log(loading)
        return <Spinner className={"d-flex justify-content-center align-content-center"}
                        style={{width: "30rem", height: "30rem"}} animation={"border"}></Spinner>
    }


    return (
        <BrowserRouter>

            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
}


export default App;
