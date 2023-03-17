import ContactItem from './ContactItem.jsx'
export default function ContactList(props) {
    const { contacts, selectedContact, setSelectedContact } = props;
    console.log('contact list rendered', new Date().toLocaleTimeString())

    return (
        <div className='contact-list'>
        {
            contacts.map( (contact, index) => {
                return (
                    <ContactItem key={contact.name + index} name={contact.name} setSelectedContact={setSelectedContact} selected={ index == selectedContact ? true : false } index={index} />
                )
            } )
        }
        </div>
    )

}