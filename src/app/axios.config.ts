import axios from 'axios'

const useAxios = () => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0',
    } as any

    const item = axios.create({
        baseURL: SERVER_URL,
        headers,
    })

    item.defaults.baseURL = SERVER_URL
    item.defaults.headers.common['Content-Type'] = 'application/json'

    return item
}

const SERVER_URL = process.env.REACT_APP_API_URL

export default useAxios
export { SERVER_URL }
