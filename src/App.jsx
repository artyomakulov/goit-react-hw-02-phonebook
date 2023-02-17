import React from 'react';
import Form from './components/Form/Form'



class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }

  formSubmit = data => {
    console.log(data)
  }


  render () {
    return (
      <Form onSubmit={this.formSubmit}/>
    )
  }
  }

export default App;

