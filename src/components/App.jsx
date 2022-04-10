import {Component} from 'react';
import { InputForm } from './InputForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Phonebook } from './Phonebook.styled';
import { InputFormBox } from './inputForm.styled';
import { ContactListBox } from './ContactList.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
    ],
    filter: ''
  }
  submitHandle = (data) => {
    // evt.preventDefault();
    // if (!data.name || !data.number) return; // проверка на ввод всех полей
    
    // Проверка на дубликат имени в книге
    const checkEqualName = this.state.contacts.find(el => (el.name === data.name));
    if (checkEqualName) {
      alert(checkEqualName.name + " is already in contacts");
      return;
    }
    
    data.id = nanoid();
    this.setState(prev => ({ contacts: [data, ...prev.contacts] }))
  }
  filterChange = (evt) => {
    evt.preventDefault();
    this.setState({ filter: evt.currentTarget.value });
  }
  onDelete = (id) => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(
      contact => contact.id !== id)
    }))
  }
  render() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact => (contact.name.toLowerCase().includes(normalizedFilter)));

    return (
      <Phonebook>
        <InputFormBox>
          <h1>Phonebook</h1>
          <InputForm submitHandle={this.submitHandle}/>
        </InputFormBox>
        <ContactListBox>
          <h2>Contact List</h2>
          <Filter filter={filter} filterChange={this.filterChange}/>
          {contacts.length ?
            <ContactList contacts={filteredContacts} onDelete={this.onDelete} /> :
            <p>No any contacts</p>}
        </ContactListBox>
      </Phonebook>
    );
  };
}
InputForm.propTypes = {
  submitHandle: PropTypes.func
}
Filter.propTypes = {
  filter: PropTypes.string,
  filterChange: PropTypes.func
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func
}