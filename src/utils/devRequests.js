import axios from 'axios'

const path = 'http://localhost:9999/users/'

const devRequests = {
    get: async (opts = {}) => {
        try{

            if(opts['email']){
                const response = await axios.get(path, {params: {email: opts.email}})
                if(response.data.length === 0){
                    return null
                }else {
                    return response.data[0]
                }
            }

            const response = await axios.get(path)
            return response.data
            
        }catch(err){
            return null
        }
    },
    post: async (body) => {
        const response = await axios.post(path, body)
        return response
    },
    delete: async (id) => {
        const response = await axios.delete(path + id)
        return response
    }
}

export default devRequests