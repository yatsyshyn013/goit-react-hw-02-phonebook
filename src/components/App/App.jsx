import React, { Component } from 'react'
import { Formik } from 'formik';
 import { PhoneBookContainer } from './App.styled';


class App extends Component {
  state = {  } 
  render() { 

    const initialValues = {
      contacts: [],
      name: ''
    }

    return (
      <PhoneBookContainer
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
        <h1>PhoneBook</h1>
        <Formik initialValues={initialValues}>
          <form action="">
            <label htmlFor="name">
              Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                          />
            </label>
            <button type="submit">Add contact</button>
          </form>
      </Formik>
    </PhoneBookContainer>
    );
  }
}
 
export default App; 
