import { useState, createContext, useContext } from 'react'
import ContactList from './components/ContactList.jsx'
import DisplayContact from './components/DisplayContact.jsx'

export const MyContext = createContext( "context!" );

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
  console.log('app rendered!', new Date())
  // console.log(MyContext)

  return (
    <>
      <header>
        <h1>Address Book</h1>
      </header>
      <MyContext.Provider value={ {contacts, setContacts, selectedContact, setSelectedContact} }>
        <aside>
          <h2>Contacts</h2>
          <ContactList/>
          <button onClick={createNewContact}>Add Contact</button>
        </aside>
        <main>
          <DisplayContact />
        </main>
      </MyContext.Provider>
      <footer>
        footer stuff
      </footer>
    </>
  )
}

export default App
