import axios from 'axios'

const useAxios = () => {
    const item = axios
    item.defaults.headers.common['Content-Type'] = 'application/json'

    return item
}

const SERVER_URL = process.env.BASE_URL

export default useAxios
export { SERVER_URL }
