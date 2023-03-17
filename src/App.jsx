import ContactList from './components/ContactList.jsx'
import DisplayContact from './components/DisplayContact.jsx'
import { useContactStore } from './contactstore.js'
import UserAvatar from './components/UserAvatar.jsx'

function App() {
  const addContact = useContactStore( state => state.addContact )
  // const [selectedContact, setSelectedContact] = useState(0)
  
  console.log('app rendered!', new Date().toLocaleTimeString())
  // console.log(MyContext)

  return (
    <>
      <header>
        <h1>Address Book</h1>
        <UserAvatar/>
      </header>
      <aside>
        <h2>Contacts</h2>
        <ContactList/>
        <button onClick={addContact}>Add Contact</button>
      </aside>
      <main>
        <DisplayContact />
      </main>
      <footer>
        footer stuff
      </footer>
    </>
  )
}

export default App
