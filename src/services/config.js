import axios from "axios";


const api = axios.create({ baseURL: 'http://localhost:3000' })

api.interceptors.response.use(resp => {
    return resp
})
export default api