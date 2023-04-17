import React, {useContext, useEffect} from 'react';
import CapibaraList from "../Components/CapibaraList";
import {Context} from "../index";
import {
    fetchCapibaras,
    fetchCapiByUser,
    fetchCapiFriends,
    fetchConnections,
    fetchConnectionTypes, fetchRequests, fetchSpouse
} from "../http/capiApi";
import {observer} from "mobx-react-lite";

const MainPage = observer(() => {

    const {currentUser, capibaras} = useContext(Context)

    useEffect(() => {

        fetchCapibaras().then(data => {
            capibaras.setCapibaras(data)
            return fetchCapiByUser(currentUser.user.id)
        })
            .then(data => {
               return currentUser.setCapi(data)
            }).then(data => {
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
    }, [])


    return (
        <CapibaraList/>
    );
})

export default MainPage;