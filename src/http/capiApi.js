import {$authHost, $host} from "./index";

export const fetchCapibaras = async () => {
    const {data} = await $host.get('capibaras/')
    console.log("DATA " + data.length)
    return data
}

export const fetchCapi = async (id) => {
    const {data} = await $host.get(`capibaras/${id}`)
    return data
}

export const createCapi = async (capi) => {
    const {data} = await $authHost.post('capibaras/',
        capi
    )
    return data
}
