import axios from '../config/axiosConfig.js'

export const createProjectApi = async () => {
    try {
        const response = await axios.post('/api/v1/project')
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }

}

export const getProjectTree = async ( projectId ) => {
    try {
        console.log("Fetching the folder tree data ")
        const response = await axios.get(`/api/v1/project/${projectId}/tree`)
        return response?.data?.data
    } catch (error) {
        console.log(error)
        throw error
    }
}