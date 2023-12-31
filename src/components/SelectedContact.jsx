import React from 'react';
import { useState, useEffect } from 'react';

const dummyContact = { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" }

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
    const [contact, setContact] = useState(dummyContact);
    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const result = await response.json();
                setContact(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContact()
    }, []);

  return (
   <div>
    <h1>Contact Info</h1>
    <button onClick={() => {
        setSelectedContactId(null)
    }}>Back to Contacts</button>
    <ul>
        <li>Name: {contact.name}</li>
        <li>Email: {contact.email}</li>
        <li>Phone: {contact.phone}</li>
        <li>Username: {contact.username}</li>
       <li>Website: {contact.website}</li>
    </ul>
   </div>
  );
};

export default SelectedContact;