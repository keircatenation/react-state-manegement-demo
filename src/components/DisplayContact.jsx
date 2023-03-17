export default function DisplayContact(props) {
    const { contact, setContacts, index, contacts, setSelectedContact } = props;
    const updateName = e => {
        let newContacts = [...contacts];
        newContacts[index].name = e.target.value;
        setContacts( newContacts)
    }
    const updateEmail = e => {
        let newContacts = [...contacts];
        newContacts[index].email = e.target.value;
        setContacts( newContacts)
    }
    const updateBirthday = e => {
        let newContacts = [...contacts];
        newContacts[index].birthday = e.target.value;
        setContacts( newContacts)
    }
    const deleteContact = () => {
        let newContacts = [...contacts.slice(0, index), ...contacts.slice(index+1)]
        if ( newContacts.length > 0 ) {
            if ( index - 1 >= 0 ) {
                setSelectedContact( index-1 )
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