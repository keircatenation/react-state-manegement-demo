import ContactItem from './ContactItem.jsx'
import { useContext } from 'react';
import { MyContext } from "../App";

export default function ContactList(props) {
    const { contacts, selectedContact } = useContext(MyContext);
    console.log('contact list rendered', new Date().toLocaleTimeString())

    return (
        <div className='contact-list'>
        {
            contacts.map( (contact, index) => {
                return (
                    <ContactItem key={contact.name + index} name={contact.name} selected={ index == selectedContact ? true : false } index={index} />
                )
            } )
        }
        </div>
    )

}