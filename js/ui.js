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

        const contactOptions = document.createElement('div')
        contactOptions.classList.add('contact-options')

        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete-btn')
        deleteButton.onclick = async () => {
            try {
                await api.deleteContact(contact.id)
                ui.renderContacts()
            } catch (error) {
                alert('Error deleting contact')
            }
        }

        const deleteSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        deleteSvg.setAttribute('viewBox', '0 0 24 24')
        deleteSvg.setAttribute('fill', 'none')
        deleteSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        deleteSvg.innerHTML = `
            <path d="M3 6H5H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 11V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 11V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        `

        deleteButton.appendChild(deleteSvg)
        contactOptions.appendChild(deleteButton)

        const editButton = document.createElement('button')
        editButton.classList.add('edit-btn')

        const editSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        editSvg.setAttribute('viewBox', '0 0 24 24')
        editSvg.setAttribute('fill', 'none')
        editSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        editSvg.innerHTML = `
            <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        `

        editButton.appendChild(editSvg)
        contactOptions.appendChild(editButton)

        li.appendChild(contactName)
        li.appendChild(contactPhoneNumber)
        li.appendChild(contactOptions)
        contactList.appendChild(li)
    }
}

export default ui