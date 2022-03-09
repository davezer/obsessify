import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail } from '../../utils/helpers';


export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
    const form = useRef();
    
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_en5crys', 'template_dave', form.current, 'user_vNCUuzNUmVUXadQmB3VM4')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
      };

      function handleChange(e) {

        if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          
          if (!isValid) {
            setErrorMessage('email is invalid.');
          } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`)
            } else {
              setErrorMessage('');
            }
          }
        }
        setFormState({...formState, [e.target.name]: e.target.value })
    
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
        }
      }
    return (
        <section id="contact">
          <div className="contacts">
            <h1 className="contacts-title">Contact us!</h1>
            <p>We would love to hear from you!</p>
            
          
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <div>
                <input className="form-input" placeholder="Name" type="text" defaultValue={name} onBlur={handleChange} name="user_name"/>
              </div>
              <div>
                <input className="form-input" placeholder="Email" type="email" defaultValue={email} name="user_email" onBlur={handleChange} />
              </div>
              <div>
                <textarea className="form-input" placeholder="Message" name="message" defaultValue={message} rows="5" onBlur={handleChange} />
              </div>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <div>
                <button className="form-button" data-testid="button" type="submit">Submit</button>
              </div>
            </form>
          </div> 
        </section>
    );
}
