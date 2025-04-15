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

    async getContactById(id) {
        try {
            const response = await axios.get(`${URL_BASE}/contacts/${id}`)
            return await response.data
        } catch {
            alert('Error getting contact by id')
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
    },

    async deleteContact(id) {
        try {
            const response = await axios.delete(`${URL_BASE}/contacts/${id}`)
        } catch {
            alert('Error deleting contact')
            throw error
        }
    },

    async editContact(contact) {
        try {
            const response = axios.put(`${URL_BASE}/contacts/${contact.id}`, contact)
            return await response.data
        } catch {
            alert('Error editing contact')
            throw error
        }
    }
}

export default api