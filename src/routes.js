import {
    CAPI_ROUTE, CREATE_CAPI_ROUTE, FAMILY_ROUTE, LOGIN_ROUTE,
    MAIN_ROUTE, MY_CAPI_ROUTE, REQUESTS_ROUTE, SIGNUP_ROUTE
} from "./utils/constRoutes";
import MainPage from "./Pages/MainPage";
import CapibaraPage from "./Pages/CapibaraPage";
import CreateCapi from "./Pages/CreateCapi";
import authPage from "./Pages/AuthPage";
import familyPage from "./Pages/familyPage";
import userCapi from "./Pages/UserCapi";
import RequestsPage from "./Pages/RequestsPage";



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

    {
        path:FAMILY_ROUTE,
        Component: familyPage
    },

    {
        path:MY_CAPI_ROUTE,
        Component: userCapi
    },

    {
        path:REQUESTS_ROUTE,
        Component: RequestsPage
    }
]