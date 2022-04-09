import { ListItem, NumByOrder, TelNum, DelBtn } from "./ContactList.styled";

export function ContactItem({contact, idx, method}) {
    return (
        <ListItem>
            <NumByOrder>{idx + 1}</NumByOrder>
            {contact.name}: <TelNum>{contact.number}</TelNum>
            <DelBtn type="button" onClick={() => method(contact.id)}>Delete</DelBtn>
        </ListItem>
    )
} 