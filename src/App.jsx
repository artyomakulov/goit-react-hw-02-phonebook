import React from 'react';
import Form from './components/Form/Form';
import ContactList from './components/Contacts/Contacts';
// import Filter from './components/Filter/Filter';



class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  formSubmit = data => {
    console.log(data)
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !==contactId)
    }))
  }


  render () {
    const {contacts} = this.state
    return (
      <div>
  <h1>Phonebook</h1>
  <Form onSubmit={this.formSubmit}/>

  <h2>Contacts</h2>
  {/* <Filter value={filter} onChange={this.filterValue} /> */}
  <ContactList contacts={contacts} onDeleteContact={this.deleteContact}/>
</div>
      
    )
  }
  }

export default App;

