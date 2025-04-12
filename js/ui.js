import api from './api.js'

const ui = {
    async renderContacts() {
        const contactList = document.getElementById('contact-list')

        contactList.innerHTML = ''

        try {
            let contacts = await api.getContacts()

            contacts.forEach(ui.addContactToList)
        } catch {
            alert('Error rendering contacts')
        }
    },

    addContactToList(contact) {
        const contactList = document.getElementById('contact-list')
        const li = document.createElement('li')
        li.setAttribute('data-id', contact.id)
        li.classList.add('contact')
        
        const contactName = document.createElement('div')
        contactName.textContent = contact.name
        contactName.classList.add('contact-name')
        
        const contactPhoneNumber = document.createElement('div')
        contactPhoneNumber.textContent = contact.phone
        contactPhoneNumber.classList.add('contact-phone')

        li.appendChild(contactName)
        li.appendChild(contactPhoneNumber)
        contactList.appendChild(li)
    }
}

export default ui