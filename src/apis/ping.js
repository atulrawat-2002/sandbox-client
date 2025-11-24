import axios from '../config/axiosConfig.js'

export const pingApi = async () => {
    try {
        
        const response = await axios.get('/api/v1/ping')
        
        return response;

    } catch (error) {
        console.log(error)
        throw error
    }
}