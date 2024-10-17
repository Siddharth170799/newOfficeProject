import axios from "axios"


const apiClient = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/posts"
})

export default apiClient