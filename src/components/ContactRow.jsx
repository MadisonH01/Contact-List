export default function ContactRow({ setSelectedContactId, contact}) {

    const buttonOnClick = () => {
        setSelectedContactId(contact.id)
    }

    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td><Button onClick={buttonOnClick}/></td>
        </tr>
    );
}
 function Button({onClick}) {
    return (
        <button onClick={onClick}>
            View Contact
        </button>
    );
}