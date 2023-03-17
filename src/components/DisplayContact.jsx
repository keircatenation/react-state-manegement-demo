import { useContext } from "react";
import { MyContext } from "../App";

export default function DisplayContact(props) {
    const { setContacts, selectedContact, contacts, setSelectedContact } = useContext(MyContext);
    const contact = contacts[selectedContact];
    const updateName = e => {
        let newContacts = [...contacts];
        newContacts[selectedContact].name = e.target.value;
        setContacts( newContacts)
    }
    const updateEmail = e => {
        let newContacts = [...contacts];
        newContacts[selectedContact].email = e.target.value;
        setContacts( newContacts)
    }
    const updateBirthday = e => {
        let newContacts = [...contacts];
        newContacts[selectedContact].birthday = e.target.value;
        setContacts( newContacts)
    }
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
                <label>Name: <input type="text" value={contact.name} onChange={updateName } placeholder="Enter name..."/></label>
                <label>Email: <input type="email" value={contact.email} onChange={updateEmail} placeholder="Enter email..."/></label>
                <label>Birthday: <input type="text" value={contact.birthday} onChange={updateBirthday} placeholder="Enter Birthday..."/></label>
            </form>
            <button onClick={deleteContact}>Delete Contact</button>
        </>
    )

}