import { useContactStore } from "../contactstore";

export default function DisplayContact(props) {
    const { setContacts, selectedContact, contacts, setSelectedContact, editContactBirthday, editContactEmail, editContactName } = useContactStore();
    const contact = contacts[selectedContact];
    const deleteContact = () => {
        let newContacts = [...contacts.slice(0, selectedContact), ...contacts.slice(selectedContact+1)]
        if ( newContacts.length > 0 ) {
            if ( selectedContact - 1 >= 0 ) {
                setSelectedContact( selectedContact-1 )
            }
        } else {
            newContacts.push( {name: '', email: '', birthday: ''} )
            setSelectedContact(0)
        }
        setContacts(newContacts)
    }
    console.log( 'display content rendered', new Date().toLocaleTimeString() )
    return (
        <>
            <h2>Contact</h2>
            <form>
                <label>Name: <input type="text" value={contact.name} onChange={ e => editContactName(e.target.value, selectedContact) } placeholder="Enter name..."/></label>
                <label>Email: <input type="email" value={contact.email} onChange={e => editContactEmail(e.target.value, selectedContact)} placeholder="Enter email..."/></label>
                <label>Birthday: <input type="text" value={contact.birthday} onChange={e => editContactBirthday( e.target.value, selectedContact )} placeholder="Enter Birthday..."/></label>
            </form>
            <button onClick={deleteContact}>Delete Contact</button>
        </>
    )

}