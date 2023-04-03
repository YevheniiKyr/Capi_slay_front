import React, {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import { publicRoutes} from "../routes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {MAIN_ROUTE} from "../utils/constRoutes";

const AppRouter = observer(() => {

    return (
        <Routes>

            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path}  element={<Component/>} exact/>
            )}

            <Route path="*" element={<Navigate to={MAIN_ROUTE} replace />} />


        </Routes>

    );
})

export default AppRouter;