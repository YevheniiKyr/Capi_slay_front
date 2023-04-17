import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

const acceptInterceptor = config => {
    config.headers.accept = 'application/json'
    config.headers.contentType = 'application/json'

    return config
}

$authHost.interceptors.request.use(authInterceptor)
$authHost.interceptors.request.use(acceptInterceptor)
$host.interceptors.request.use(acceptInterceptor)

export {
    $host,
    $authHost
}