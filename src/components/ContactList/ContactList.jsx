import { List, ListItem, ContactListBtn } from "./ContactList.styled"

export function ContactList({ contacts, deleteButton }) {

    return (
        <List>

            {contacts.map(({id, name, number}) => (
                
                <ListItem key={id}>{name}: {number}
                <ContactListBtn type="button" onClick={()=> deleteButton(id)}>Delete</ContactListBtn>
                </ListItem>
                    
                
            ))}
           
        </List>
    )
}