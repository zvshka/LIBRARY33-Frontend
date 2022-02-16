export const fetcher = async (url, auth = null, data) => {
    let headers
    if (auth) {
        headers = {
            ...data.headers,
            "Authorization": `Bearer ${auth}`
        }
    } else {
        headers = {
            ...data.headers
        }
    }
    return fetch(url, {
        ...data,
        headers
    })
}