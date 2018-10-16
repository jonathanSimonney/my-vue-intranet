import axios from "axios"

// URL du serveur
const API_ENDPOINT = '//localhost:9000'

export default {
    async fetchAll(){
        try {
            return await axios.get(` http:${API_ENDPOINT}/collaborateurs`)
        } catch (e) {
            console.error(e)
        }
    },

    async removeOne(id){
        try {
            return await axios.delete(` http:${API_ENDPOINT}/collaborateur/${id}`);
        } catch (e) {
            console.error(e)
        }
    },

    async createUser(userData){
        try {
            return await axios.post(` http:${API_ENDPOINT}/collaborateur`, userData);
        } catch (e) {
            console.error(e)
        }
    },
}