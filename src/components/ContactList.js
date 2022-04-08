import { ListItem, NumByOrder, TelNum, DelBtn} from "./ContactList.styled"
export function ContactList({ contacts, onDelete }) {

    return (
        <>
        {contacts.map((contact, idx) => (
                <ListItem key={contact.id}>
                    <NumByOrder>{idx + 1}</NumByOrder>
                    {contact.name}: <TelNum>{contact.number}</TelNum>
                    <DelBtn type="button" onClick={() => onDelete(contact.id)}>Delete</DelBtn>
                </ListItem>
            ))}
        </>
    )
}