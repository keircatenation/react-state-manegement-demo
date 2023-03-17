import { create } from "zustand";

export const useContactStore = create( set => ( {
    contacts: [{
        name: 'AnnMarie Jones',
        email: 'annmariej@gmail.com',
        birthday: "September 9, 1988"
    }],
    selectedContact: 0,
    addContact: () => {
        set( state => {
            return { contacts: [...state.contacts, { name: '', email: '', birthday: '' }] }
        } )
    },
    editContactBirthday: ( value, index ) => {
        set( state => {
            let newContacts = [...state.contacts]
            newContacts[index].birthday = value;
            return {contacts: newContacts}
        } )
    },
    editContactEmail: ( value, index ) => {
        set( state => {
            let newContacts = [...state.contacts]
            newContacts[index].email = value;
            return {contacts: newContacts}
        } )
    },
    editContactName: ( value, index ) => {
        set( state => {
            let newContacts = [...state.contacts]
            newContacts[index].name = value;
            return {contacts: newContacts}
        } )
    },
    setContacts: newContacts => {
        set( () => ({ contacts: newContacts }) )
    },
    setSelectedContact: index => {
        set( () => ( {selectedContact: index} ) )
    }
} ) )