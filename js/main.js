import ui from './ui.js'
import api from './api.js'

document.addEventListener('DOMContentLoaded', () => {
    ui.renderContacts()

    const contactForm = document.getElementById('contact-form')
    contactForm.addEventListener('submit', submitForm)

    const cancelButton = document.getElementById('cancel-btn-form')
    cancelButton.addEventListener('click', ui.resetForm)
})

async function submitForm(event) {
    event.preventDefault()

    const contactId = document.getElementById('contact-id').value  
    const contactName = document.getElementById('contact-name').value  
    const contactPhone = document.getElementById('contact-phone').value

    try {
        if (contactId) {
            await api.editContact({ id: contactId, name: contactName, phone: contactPhone })
        } else {
            await api.createContact({ name: contactName, phone: contactPhone })
        }
        ui.renderContacts()
        ui.resetForm()
    } catch {
        alert('Error creating new contact')
    }
}