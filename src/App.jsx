import { useState } from 'react'
import ContactList from './components/ContactList.jsx'
import DisplayContact from './components/DisplayContact.jsx'
import UserAvatar from './components/UserAvatar.jsx'

function App() {
  const [contacts, setContacts] = useState([{
    name: 'AnnMarie Jones',
    email: 'annmariej@gmail.com',
    birthday: "September 9, 1988"
  }])
  const [selectedContact, setSelectedContact] = useState(0)

  const createNewContact = () => {
    setContacts( [...contacts, { name: '', email: '', birthday: '' }] )
    setSelectedContact( contacts.length )
  }
  console.log('app rendered!', new Date().toLocaleTimeString())

  return (
    <>
      <header>
        <h1>Address Book</h1>
        <UserAvatar/>
      </header>
      <aside>
        <h2>Contacts</h2>
        <ContactList contacts={contacts} setSelectedContact={setSelectedContact} selectedContact={selectedContact}/>
        <button onClick={createNewContact}>Add Contact</button>
      </aside>
      <main>
        <DisplayContact contact={ contacts[selectedContact] } index={selectedContact} setContacts={setContacts} contacts={contacts} setSelectedContact={setSelectedContact} />
      </main>
      <footer>
        footer stuff
      </footer>
    </>
  )
}

export default App
