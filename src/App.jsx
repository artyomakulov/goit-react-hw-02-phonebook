import React from 'react';
import { nanoid } from 'nanoid'
import Form from './components/Form/Form';
import ContactList from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import css from './App.module.css'


class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  formSubmit = data => {
    console.log(data)
    const contact = {
      ...data,
      id: nanoid()
    };
    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts]
    }))
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !==contactId)
    }))
  }

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  getVisibleContacts = () => {
    const {contacts, filter} = this.state;
    const narmalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(narmalizedFilter));
  }
    

  render () {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={css.section}>
  <h1>Phonebook</h1>
  <Form onSubmit={this.formSubmit}/>

  <h2>Contacts</h2>
  <Filter value={this.state.filter} onChange={this.changeFilter} />
  <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
</div>
      
    )
  }
  }

export default App;

