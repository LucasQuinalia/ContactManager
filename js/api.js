const URL_BASE = 'http://localhost:3000'

const api = {
    async getContacts() {
        try {
            const response = await axios.get(`${URL_BASE}/contacts`)
            return await response.data
        } catch {
            alert("Error getting contacts")
            throw error
        }
    },

    async createContact(contact) {
        try {
            const response = await axios.post(`${URL_BASE}/contacts`, { ...contact })
            return await response.data
        } catch {
            alert("Error creating new contact")
            throw error
        }
    }
}

export default api