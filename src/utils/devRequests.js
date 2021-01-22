import axios from 'axios'

const path = 'http://localhost:9999/users'

const devRequests = {
    get: async () => {
        const response = await axios.get(path)
        return response.data
    },
    post: async (body) => {
        const response = await axios.post(path, body)
        return response
    },
    delete: async (id) => {
        const response = await axios.delete(path + '/' + id)
        return response
    }
}

export default devRequests