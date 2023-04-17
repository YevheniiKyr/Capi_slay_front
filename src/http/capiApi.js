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
    console.log("TRY AAAAAAAAAAA")
    const {data} = await $authHost.post('capibaras/', capi
    )
    return data
}


export const fetchCapiByUser = async (id) => {
    const {data} = await $host.get(`capibaras/`,
        {
            params: {
                id: id
            }
        }
    )
    return data
}

export const connectCapis = async (capi_1, capi_2, connection_type_id, status) => {
    const {data} = await $authHost.post('connections/',
        {capi_1, capi_2, connection_type_id, status})
    return data
}

export const fetchConnectionTypes = async () => {
    const {data} = await $host.get(`connection_types/`)
    return data
}

export const fetchConnections = async (id) => {
    const {data} = await $host.get(`connections/`, {
        params: {
            id: id
        }
    })
    return data
}

export const fetchConnectionType = async (id) => {
    const {data} = await $host.get(`connection_types/${id}`)
    return data
}

export const fetchCapisByIds = async (ids) => {
    const {data} = await $host.get(`capibaras/`, {
        params: {
            ids: ids
        }
    })
    return data
}

export const fetchCapiFriends = async (id) => {
    const {data} = await $host.get(`capibaras/`, {
        params: {
            id: id,
            filter: "friends"
        }
    })
    return data
}

export const fetchSpouse = async (id) => {
    const {data} = await $host.get(`capibaras/`, {
        params: {
            id: id,
            filter: "spouse"
        }
    })
    return data
}

export const fetchRequestsCapi = async (id) => {
    const {data} = await $host.get(`capibaras/`, {
        params: {
            id: id,
            filter: "requests"
        }
    })
    return data
}

export const fetchRequests = async (id, status) => {
    const {data} = await $host.get(`connections/`, {
        params: {
            id: id,
            status: status
        }
    })
    return data
}

export const answerConnection = async (connection, answer) => {
    const {data} = await $authHost.put(`connections/${connection.id}`, {
        status: answer
    })
    return data
}

export const findConnection = async (capi_1, capi_2, filter) => {
    const {data} = await $authHost.get(`connections/`, {
        params: {
            capi_1: capi_1,
            capi_2: capi_2,
            filter: filter
        }
    })
    return data
}

export const deleteConnection = async (id) => {
    const {data} = await $authHost.delete(`connections/${id}`)
    return data
}
