import React from 'react';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { delateContactsAction } from 'redux/contact/contact-slice';
import { selectFilteredContacts } from 'redux/filter/filterSelector';

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const delateContact = id => dispatch(delateContactsAction(id));

  const contact = contacts.map(({ name, number, id }) => (
    <li key={id} className={css.item}>
      <p className={css.itemText}>
        {name} : {number}
      </p>
      <button
        className={css.itemButton}
        onClick={() => delateContact(id)}
        type="button"
      >
        Delate
      </button>
    </li>
  ));

  return <ul className={css.list}>{contact}</ul>;
}


export default ContactList;
