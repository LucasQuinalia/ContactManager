const URL_BASE = 'http://localhost:3000'

const api = {
    async getContacts() {
        try {
            const response = await axios.get(`${URL_BASE}/contacts`)
            const contacts = await response.data

            return contacts
        } catch {
            alert("Error getting contacts")
            throw error
        }
    }
}

export default api