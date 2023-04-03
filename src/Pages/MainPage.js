import React, {useContext, useEffect} from 'react';
import CapibaraList from "../Components/CapibaraList";
import {Context} from "../index";
import {fetchCapibaras} from "../http/capiApi";

const MainPage = () => {

    const {capibaras} = useContext(Context)

    useEffect(()=> {
        fetchCapibaras().then(data => {
            capibaras.setCapibaras(data)
        })
    })
    return (
        <CapibaraList/>
    );
};

export default MainPage;