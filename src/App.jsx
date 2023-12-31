import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact'

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  const selectedContact = () => {
    return (
      <SelectedContact
      selectedContactId={selectedContactId}
      setSelectedContactId={setSelectedContactId}/>
    )
  }

  const contactList = () => {
    return (
      <ContactList setSelectedContactId={setSelectedContactId} />
    )
  }
  
  return (
    <>
    {selectedContactId ? selectedContact() : contactList()}
    </>
  );
}



