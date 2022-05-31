import React, { useState } from 'react';

// Importing helper to check if email is valid from activity 20.16.
import { validateEmail} from '../../utils/helpers'

 export default function Contact() {

  const [formState, setFormState] = useState({
    name: '',
    email:'',
    message:'',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const {name, email, message } = formState;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name === 'email') {
      const isGood = validateEmail(e.target.value);
      if (!isGood) {
        setErrorMessage('Not a valid email');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
      }
    }
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <section>
        <form id="contact-form" onSubmit ={handleFormSubmit} >
          <div>
            <label htmlFor="name"> Name:</label>
            <input
              type = "text"
              name = "name"
              defaultValue = {name}
              onBlur = {handleInputChange}
              />
          </div>
          <div>
          <label htmlFor="email"> Email:</label>
            <input
              type = "email"
              name = "email"
              defaultValue = {email}
              onBlur = {handleInputChange}
              />
            </div>
            <div>
            <label htmlFor="name"> Message:</label>
            <textarea
              name = "message"
              rows = "5"
              defaultValue = {message}
              onBlur = {handleInputChange}
              />
            </div>
          
        </form>
        </section>

    </div>
  );
}
