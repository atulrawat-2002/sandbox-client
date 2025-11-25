import axios from '../config/axiosConfig.js'

export const createProjectApi = async () => {
    try {
        const response = await axios.post('/api/v1/project')
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }

}

export const getProjectTree = async (projectId) => {
    try {
        const response = await axios.get(`/api/project/${projectId}/tree`)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}