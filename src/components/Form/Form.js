import React from 'react'
import { nanoid } from 'nanoid'


 class Form extends React.Component {
    state = {
        name: '',
        number: ''
      };
    
    handleChange = e => {
    const {name, value} = e.currentTarget
        this.setState({
        [name]: value
        })
    }

    handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset()
    }

    reset = () => {
        this.setState({name: '', number: ''})
    }

    nameId = nanoid();
    telId = nanoid();

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>
            Name <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameId}
          />
        </label>
        <label htmlFor={this.telId}>
            Number <input
            type="tel"
            name='number'
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.telId}
          />  
        </label>
        <button type="submit" disabled={this.state.name === '' || this.state.number === ''}>Add contact</button>
      </form>
        )
    }
 }

export default Form