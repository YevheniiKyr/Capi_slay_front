import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Spinner} from "react-bootstrap";
import {Context} from "../index";
import CapibaraList from "../Components/CapibaraList";
import {fetchCapi, fetchCapiFriends, fetchCapisByIds, fetchConnectionTypes, fetchSpouse} from "../http/capiApi";
import CapibaraItem from "../Components/CapibaraItem";
import {observer} from "mobx-react-lite";
import CapibaraFriendsList from "../Components/CapibaraFriendsList";
import CapibaraLoveItem from "../Components/CapibaraLoveItem";
import {useNavigate} from "react-router-dom";
import {MAIN_ROUTE} from "../utils/constRoutes";

const FamilyPage = observer(() => {

    const { currentUser } = useContext(Context)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        if (currentUser?.capi?.id) {
            fetchCapiFriends(currentUser.capi.id).then(data => {
                currentUser.setCapiFriends(data)
            })
            fetchSpouse(currentUser.capi.id).then(data => {
                currentUser.setCapiSpouse(data)
            })
            setLoading(false)
        }

        }
        , [currentUser?.capi?.id])

    if (loading) {
        //  console.log(loading)
        return <Spinner className={"d-flex justify-content-center align-content-center"}
                        style={{width: "30rem", height: "30rem"}} animation={"border"}></Spinner>
    }

    return (
        <Container>

            <h2> FRIENDS </h2>
            {
            currentUser.capiFriends?.length?
                    <CapibaraFriendsList/>
                :
                <Button className={'btn-info'}
                        onClick = {() => navigate(MAIN_ROUTE)}> FIND NEW FRIENDS </Button>
            }
            <h2> YOUR LOVE </h2>
            {currentUser.capiSpouse?
                    <CapibaraItem capibara={currentUser.capiSpouse}/>
                :
                <Button className={'btn-info'}
                onClick = {() => navigate(MAIN_ROUTE)}> FIND YOUR LOVE </Button>
            }
        </Container>
    );
})

export default FamilyPage;