import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (name, password) => {

    console.log('post user')
    const {data} = await $host.post('users', {user:{name, password, role: 'USER'}})
    localStorage.setItem('token', data)
    console.log("Token " + data)
    return jwt_decode(data)
}

export const login = async (name, password) => {

    const {data} = await $host.post('login', {user:{name, password}})
    console.log("ANSWER" + data)
    localStorage.setItem('token', data)
    return jwt_decode(data)
}

export const check = async () => {
    const {data} = await $authHost.get('auth/check' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

