import { useState } from 'react';
import React from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contact/contactSelector';
import { addContactsAction } from 'redux/contact/contact-slice';


export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const actions = {
    name: setName,
    number: setNumber,
  };

  const handleChange = e => {
    const { name, value } = e.target;
    actions[name](value);
  };

  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { name, number, id: nanoid() };
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase().trim() === name.toLowerCase().trim() ||
          contact.number.trim() === number.trim()
      )
    ) {
      return alert(`${name} already exists`);
    }
    dispatch(addContactsAction(newContact));
    handleReset();
  };

  const handleReset = () => {
    setName('');
    setNumber('');
  };
  
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <form className={css.form} action="" onSubmit={handleSubmit}>
      <label htmlFor={nameInputId} className={css.formLabel}>
        Name
      </label>
      <input
        id={nameInputId}
        onChange={handleChange}
        name="name"
        value={name}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={css.formInput}
      />
      <label htmlFor={numberInputId} className={css.formLabel}>
        Number
      </label>
      <input
        id={numberInputId}
        onChange={handleChange}
        name="number"
        value={number}
        type="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        className={css.formInput}
      />
      <button className={css.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
};


export default ContactForm;
