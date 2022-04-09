import { ContactItem } from "./ContactItem";

export function ContactList({ contacts, onDelete }) {

    return (
        <>
            {contacts.map((contact, idx) => (
                <ContactItem key={contact.id} contact={contact} idx={idx} method={onDelete}/>
            ))}
        </>
    )
}