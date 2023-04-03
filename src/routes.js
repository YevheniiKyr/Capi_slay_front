import {
    CAPI_ROUTE, CREATE_CAPI_ROUTE, LOGIN_ROUTE,
    MAIN_ROUTE, SIGNUP_ROUTE
} from "./utils/constRoutes";
import MainPage from "./Pages/MainPage";
import CapibaraPage from "./Pages/CapibaraPage";
import CreateCapi from "./Pages/CreateCapi";
import Auth from "./Pages/AuthPage";
import authPage from "./Pages/AuthPage";



export const publicRoutes = [

    {
        path: MAIN_ROUTE,
        Component: MainPage
    },

    {
        path: CAPI_ROUTE + '/:id',
        Component: CapibaraPage
    },

    {
        path: CREATE_CAPI_ROUTE,
        Component: CreateCapi
    },

    {
        path: LOGIN_ROUTE,
        Component: authPage
    },

    {
        path: SIGNUP_ROUTE,
        Component: authPage
    },

]