import axios from "axios"

// URL du serveur
const API_ENDPOINT = '//localhost:9000'

export default {
    async fetchAll(){
        try {
            return await axios.get(` http://localhost:9000/collaborateurs`)
        } catch (e) {
            console.error(e)
        }
    },

    async removeOne(id){
        try {
            return await axios.delete(` http://localhost:9000/collaborateur/${id}`);
        } catch (e) {
            console.error(e)
        }
    }
}